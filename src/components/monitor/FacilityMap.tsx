import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import statesTopo from "us-atlas/states-10m.json";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type FacilityStatus = "operating" | "construction" | "idled" | "closed";

type Facility = {
  id: string;
  name: string;
  company: string;
  kind: "smelter" | "recycler";
  status: string;
  activity_status: string | null;
  city: string | null;
  state: string;
  lat: number;
  lng: number;
  capacity: string | null;
  annual_capacity_lb: number | null;
  capacity_source_url: string | null;
  products: string | null;
  completion: string | null;
  website: string | null;
  linkedin: string | null;
};

type MapPosition = { coordinates: [number, number]; zoom: number };

const DEFAULT_POSITION: MapPosition = { coordinates: [-96, 38], zoom: 1 };
const STATUS_OPTIONS: Array<"all" | FacilityStatus> = ["all", "operating", "construction", "idled", "closed"];

const facilityStatus = (facility: Facility): FacilityStatus => {
  const detailed = facility.activity_status;
  if (detailed === "construction" || detailed === "idled" || detailed === "closed") return detailed;
  return "operating";
};

const statusLabel = (status: FacilityStatus) => {
  if (status === "construction") return "Under construction";
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const formatCapacity = (value: number) => {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B lb/yr`;
  return `${Math.round(value / 1_000_000).toLocaleString()}M lb/yr`;
};

const FacilityMap = () => {
  const [kind, setKind] = useState<"all" | "smelter" | "recycler">("all");
  const [status, setStatus] = useState<"all" | FacilityStatus>("all");
  const [selected, setSelected] = useState<Facility | null>(null);
  const [stateName, setStateName] = useState("United States");
  const [position, setPosition] = useState<MapPosition>(DEFAULT_POSITION);
  const { data = [] } = useQuery({
    queryKey: ["facilities"],
    queryFn: async () => {
      const { data, error } = await supabase.from("facilities").select("*");
      if (error) throw error;
      return (data ?? []).map((facility) => ({
        ...facility,
        annual_capacity_lb: facility.annual_capacity_lb === null ? null : Number(facility.annual_capacity_lb),
      })) as Facility[];
    },
  });

  const shown = useMemo(
    () => data.filter((facility) =>
      (kind === "all" || facility.kind === kind) &&
      (status === "all" || facilityStatus(facility) === status)),
    [data, kind, status],
  );

  const summaries = useMemo(() => (["smelter", "recycler"] as const).map((summaryKind) => {
    const operating = shown.filter((facility) => facility.kind === summaryKind && facilityStatus(facility) === "operating");
    const withCapacity = operating.filter((facility) => facility.annual_capacity_lb !== null);
    return {
      kind: summaryKind,
      sites: operating.length,
      knownSites: withCapacity.length,
      capacity: withCapacity.reduce((total, facility) => total + (facility.annual_capacity_lb ?? 0), 0),
    };
  }), [shown]);

  const chip = (active: boolean) =>
    `h-8 rounded-none border px-3 text-[11px] font-bold uppercase tracking-wider transition-colors ${
      active ? "border-foreground bg-foreground text-background" : "border-border bg-background text-muted-foreground hover:text-foreground"
    }`;

  const setZoom = (nextZoom: number) => {
    setPosition((current) => ({ ...current, zoom: Math.max(1, Math.min(7, nextZoom)) }));
  };

  return (
    <section className="border border-border bg-background">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider">U.S. Aluminum Capacity Map</h2>
          <p className="text-xs text-muted-foreground">Use a touchpad or mouse wheel to zoom. Drag to pan and select a site for details.</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {(["all", "smelter", "recycler"] as const).map((value) => (
            <Button key={value} type="button" className={chip(kind === value)} onClick={() => setKind(value)}>
              {value === "all" ? "All facilities" : `${value}s`}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid border-b border-border sm:grid-cols-2">
        {summaries.map((summary) => (
          <div key={summary.kind} className="flex items-end justify-between gap-4 p-4 first:border-b first:border-border sm:first:border-b-0 sm:first:border-r">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Operating {summary.kind}s</p>
              <p className="mt-1 text-2xl font-bold">{summary.capacity > 0 ? formatCapacity(summary.capacity) : "Not quantified"}</p>
              <p className="text-[11px] text-muted-foreground">Known public annual capacity · {summary.knownSites} quantified</p>
            </div>
            <p className="text-right text-sm font-bold">{summary.sites}<br /><span className="text-[10px] uppercase text-muted-foreground">sites</span></p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1 border-b border-border p-3">
        {STATUS_OPTIONS.map((value) => (
          <Button key={value} type="button" className={chip(status === value)} onClick={() => setStatus(value)}>
            {value === "all" ? "Any status" : statusLabel(value)}
          </Button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="relative h-[330px] touch-none overflow-hidden bg-secondary sm:h-[410px]">
          <ComposableMap projection="geoAlbersUsa" width={980} height={520} className="h-full w-full cursor-grab active:cursor-grabbing">
            <ZoomableGroup
              center={position.coordinates}
              zoom={position.zoom}
              minZoom={1}
              maxZoom={7}
              translateExtent={[[0, 0], [980, 520]]}
              onMoveEnd={({ coordinates, zoom }) => setPosition({ coordinates: coordinates as [number, number], zoom })}
            >
              <Geographies geography={statesTopo}>
                {({ geographies }) => geographies.map((geography) => {
                  const name = typeof geography.properties?.name === "string" ? geography.properties.name : "United States";
                  return (
                    <Geography
                      key={geography.rsmKey}
                      geography={geography}
                      onMouseEnter={() => setStateName(name)}
                      onMouseLeave={() => setStateName("United States")}
                      style={{
                        default: { fill: "hsl(var(--background))", stroke: "hsl(var(--border))", strokeWidth: 0.8 / position.zoom, outline: "none" },
                        hover: { fill: "hsl(var(--muted))", stroke: "hsl(var(--foreground))", strokeWidth: 1 / position.zoom, outline: "none" },
                        pressed: { fill: "hsl(var(--muted))", outline: "none" },
                      }}
                    />
                  );
                })}
              </Geographies>
              {shown.map((facility) => {
                const color = facility.kind === "smelter" ? "hsl(var(--brand))" : "hsl(var(--foreground))";
                const detailedStatus = facilityStatus(facility);
                const outlined = detailedStatus !== "operating";
                const active = selected?.id === facility.id;
                const radius = (active ? 9 : 6.5) / Math.sqrt(position.zoom);
                return (
                  <Marker key={facility.id} coordinates={[facility.lng, facility.lat]} onClick={() => setSelected(facility)} style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" }, pressed: {} }}>
                    {detailedStatus === "construction" && (
                      <circle r={14 / Math.sqrt(position.zoom)} fill="none" stroke={color} strokeWidth={1.5 / position.zoom} strokeDasharray={`${3 / position.zoom} ${3 / position.zoom}`} />
                    )}
                    <circle
                      r={radius}
                      fill={outlined ? "hsl(var(--background))" : color}
                      stroke={facility.kind === "smelter" ? "hsl(var(--foreground))" : color}
                      strokeWidth={(outlined ? 2.5 : 1.5) / position.zoom}
                      opacity={detailedStatus === "closed" ? 0.45 : detailedStatus === "idled" ? 0.65 : 1}
                    />
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>

          <div className="absolute left-3 top-3 bg-background/95 px-3 py-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Viewing</p>
            <p className="text-sm font-bold">{stateName}</p>
          </div>
          <div className="absolute right-3 top-3 flex flex-col gap-1">
            <Button type="button" variant="outline" size="icon" className="h-9 w-9 bg-background" onClick={() => setZoom(position.zoom * 1.5)} aria-label="Zoom in" title="Zoom in"><ZoomIn /></Button>
            <Button type="button" variant="outline" size="icon" className="h-9 w-9 bg-background" onClick={() => setZoom(position.zoom / 1.5)} aria-label="Zoom out" title="Zoom out"><ZoomOut /></Button>
            <Button type="button" variant="outline" size="icon" className="h-9 w-9 bg-background" onClick={() => setPosition(DEFAULT_POSITION)} aria-label="Reset map" title="Reset map"><RotateCcw /></Button>
          </div>
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-3 bg-background/95 px-3 py-2 text-[10px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full border border-foreground bg-brand" />Smelter</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-foreground" />Recycler</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full border-2 border-dashed border-foreground" />Non-operating</span>
          </div>
        </div>

        <aside className="border-t border-border p-5 lg:border-l lg:border-t-0">
          {selected ? (
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                {selected.kind} · {statusLabel(facilityStatus(selected))}
              </p>
              <h3 className="text-xl font-bold leading-tight">{selected.name}</h3>
              <p className="text-sm text-muted-foreground">{selected.company} — {selected.city ? `${selected.city}, ` : ""}{selected.state}</p>
              <dl className="space-y-2 text-sm">
                {selected.capacity && <div><dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Public capacity</dt><dd className="font-bold">{selected.capacity}</dd></div>}
                {selected.products && <div><dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Products</dt><dd className="font-bold">{selected.products}</dd></div>}
                {selected.completion && <div><dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Expected completion</dt><dd className="font-bold">{selected.completion}</dd></div>}
              </dl>
              <div className="flex flex-wrap gap-2 pt-2">
                {selected.website && <Button asChild className="h-auto rounded-none bg-brand px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-brand/90"><a href={selected.website} target="_blank" rel="noopener noreferrer">Website ↗</a></Button>}
                {selected.linkedin && <Button asChild variant="outline" className="h-auto rounded-none border-foreground px-3 py-2 text-xs font-bold uppercase tracking-wider"><a href={selected.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></Button>}
                {selected.capacity_source_url && <Button asChild variant="link" className="h-auto px-0 text-xs font-bold"><a href={selected.capacity_source_url} target="_blank" rel="noopener noreferrer">Capacity source ↗</a></Button>}
              </div>
              <Button type="button" variant="ghost" className="h-auto px-0 text-xs font-bold uppercase" onClick={() => setSelected(null)}>Back to site list</Button>
            </div>
          ) : (
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-bold text-foreground">{shown.length} sites shown</p>
              <ul className="max-h-[300px] space-y-1 overflow-auto">
                {shown.map((facility) => (
                  <li key={facility.id}>
                    <Button type="button" variant="ghost" onClick={() => setSelected(facility)} className="h-auto w-full justify-start rounded-none px-0 py-1 text-left font-normal hover:bg-transparent hover:text-foreground">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${facility.kind === "smelter" ? "border border-foreground bg-brand" : "bg-foreground"}`} />
                      <span className="truncate">{facility.name}</span>
                      <span className="ml-auto text-[10px] uppercase">{facility.state}</span>
                    </Button>
                  </li>
                ))}
              </ul>
              <p className="text-[11px]">Totals include only operating sites with a public plant-specific figure. Missing figures are not estimated.</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default FacilityMap;