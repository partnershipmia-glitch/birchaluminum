import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type Commodity = { id: string; code: string; name: string; category: string; unit: string; basis: string; source: string; sort: number };
export type PricePoint = { commodity_id: string; price: number; recorded_at: string };

export const useCommodities = () =>
  useQuery({
    queryKey: ["commodities"],
    queryFn: async () => {
      const { data, error } = await supabase.from("commodities").select("*").eq("active", true).order("sort");
      if (error) throw error;
      return data as Commodity[];
    },
  });

export const usePrices = (sinceDays = 400) =>
  useQuery({
    queryKey: ["prices", sinceDays],
    queryFn: async () => {
      const since = new Date(Date.now() - sinceDays * 864e5).toISOString();
      const { data, error } = await supabase
        .from("price_points")
        .select("commodity_id,price,recorded_at")
        .gte("recorded_at", since)
        .order("recorded_at")
        .limit(5000);
      if (error) throw error;
      return (data ?? []).map((p) => ({ ...p, price: Number(p.price) })) as PricePoint[];
    },
    refetchInterval: 60000,
  });

/** Latest value and change vs. the previous entry, per commodity. */
export const latestByCommodity = (points: PricePoint[]) => {
  const map = new Map<string, { last: PricePoint; prev?: PricePoint }>();
  for (const p of points) {
    const cur = map.get(p.commodity_id);
    map.set(p.commodity_id, { last: p, prev: cur?.last });
  }
  return map;
};

export const fmtChange = (diff: number, unit: string) => {
  const sign = diff > 0 ? "+" : diff < 0 ? "−" : "±";
  const abs = Math.abs(diff);
  if (unit === "$/lb") return `${sign}${(abs * 100).toFixed(1)}¢`;
  return `${sign}$${abs.toFixed(2)}`;
};

export const fmtPrice = (v: number, unit: string) => (unit === "$/lb" ? `$${v.toFixed(3)}` : `$${v.toLocaleString(undefined, { maximumFractionDigits: 2 })}`);

export const timeAgo = (iso: string) => {
  const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (m < 60) return `${Math.max(1, m)}m ago`;
  const h = Math.round(m / 60);
  if (h < 48) return `${h}h ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
};
