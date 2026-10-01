import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import statesTopo from "us-atlas/states-10m.json";
import { supabase } from "@/integrations/supabase/client";

type Facility = {
  id: string; name: string; company: string; kind: string; status: string; city: string | null; state: string;
  lat: number; lng: number; capacity: string | null; products: string | null; completion: string | null;
  website: string | null; linkedin: string | null;
};

const FacilityMap = () => {
  const [kind, setKind] = useState<"all" | "smelter" | "recycler">("all");
  const [status, setStatus] = useState<"all" | "operating" | "construction">("all");
  const [sel, setSel] = useState<Facility | null>(null);
  const { data = [] } = useQuery({
    queryKey: ["facilities"],
    queryFn: async () => {
      const { data, error } = await supabase.from("facilities").select("*");
      if (error) throw error;
      return data as Facility[];
    },
  });
  const shown = data.filter((f) => (kind === "all" || f.kind === kind) && (status === "all" || f.status === status));

  const chip = (active: boolean) =>
    `px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider border transition-colors ${
      active ? "bg-foreground text-background border-foreground" : "bg-background text-muted-foreground border-border hover:text-foreground"
    }`;

  return (
    <section className="border border-border bg-background">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider">U.S. Aluminum Capacity Map</h2>
          <p className="text-xs text-muted-foreground">Smelters and recyclers — operating and under construction. Click a site for details.</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {(["all", "smelter", "recycler"] as const).map((k) => (
            <button key={k} className={chip(kind === k)} onClick={() => setKind(k)}>{k === "all" ? "All" : k + "s"}</button>
          ))}
          <span className="w-2" />
          {(["all", "operating", "construction"] as const).map((s) => (
            <button key={s} className={chip(status === s)} onClick={() => setStatus(s)}>{s === "all" ? "Any status" : s === "construction" ? "Under construction" : "Operating"}</button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px]">
        <div className="relative bg-secondary">
          <ComposableMap projection="geoAlbersUsa" width={980} height={560} className="h-auto w-full">
            <Geographies geography={statesTopo}>
              {({ geographies }) =>
                geographies.map((g) => (
                  <Geography
                    key={g.rsmKey}
                    geography={g}
                    style={{
                      default: { fill: "hsl(var(--background))", stroke: "hsl(var(--border))", strokeWidth: 0.8, outline: "none" },
                      hover: { fill: "hsl(var(--muted))", stroke: "hsl(var(--border))", strokeWidth: 0.8, outline: "none" },
                      pressed: { fill: "hsl(var(--muted))", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {shown.map((f) => {
              const color = f.kind === "smelter" ? "hsl(var(--brand))" : "hsl(var(--foreground))";
              const building = f.status === "construction";
              const active = sel?.id === f.id;
              return (
                <Marker key={f.id} coordinates={[f.lng, f.lat]} onClick={() => setSel(f)} style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" }, pressed: {} }}>
                  {building && (
                    <circle r={14} fill="none" stroke={color} strokeWidth={1.5} strokeDasharray="3 3">
                      <animate attributeName="r" values="9;16;9" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle r={active ? 9 : 7} fill={building ? "hsl(var(--background))" : color} stroke={f.kind === "smelter" ? "hsl(var(--foreground))" : color} strokeWidth={building ? 2.5 : 1.5} />
                </Marker>
              );
            })}
          </ComposableMap>
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-4 bg-background/90 px-3 py-2 text-[11px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full border border-foreground bg-brand" />Smelter</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-foreground" />Recycler</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full border-2 border-dashed border-foreground" />Under construction</span>
          </div>
        </div>

        <aside className="border-t border-border p-5 lg:border-l lg:border-t-0">
          {sel ? (
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                {sel.kind} · {sel.status === "construction" ? "Under construction" : "Operating"}
              </p>
              <h3 className="text-xl font-bold leading-tight">{sel.name}</h3>
              <p className="text-sm text-muted-foreground">{sel.company} — {sel.city ? `${sel.city}, ` : ""}{sel.state}</p>
              <dl className="space-y-2 text-sm">
                {sel.capacity && <div><dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Capacity</dt><dd className="font-bold">{sel.capacity}</dd></div>}
                {sel.products && <div><dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Products</dt><dd className="font-bold">{sel.products}</dd></div>}
                {sel.completion && <div><dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Expected completion</dt><dd className="font-bold">{sel.completion}</dd></div>}
              </dl>
              <div className="flex flex-wrap gap-2 pt-2">
                {sel.website && <a href={sel.website} target="_blank" rel="noopener noreferrer" className="bg-brand px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-90">Website ↗</a>}
                {sel.linkedin && <a href={sel.linkedin} target="_blank" rel="noopener noreferrer" className="border border-foreground px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-foreground hover:text-background">LinkedIn ↗</a>}
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-bold text-foreground">{shown.length} sites shown</p>
              <ul className="max-h-[380px] space-y-1 overflow-auto">
                {shown.map((f) => (
                  <li key={f.id}>
                    <button onClick={() => setSel(f)} className="flex w-full items-center gap-2 py-1 text-left hover:text-foreground">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${f.kind === "smelter" ? "border border-foreground bg-brand" : "bg-foreground"}`} />
                      <span className="truncate">{f.name}</span>
                      <span className="ml-auto text-[10px] uppercase">{f.state}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-[11px]">Capacities are approximate public figures and may change.</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default FacilityMap;
