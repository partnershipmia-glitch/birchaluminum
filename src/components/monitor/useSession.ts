import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const useSessionUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setUser(s?.user ?? null));
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (!user) return setIsAdmin(false);
    supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);
  return { user, isAdmin };
};

export const displayName = (u: User) =>
  (u.user_metadata?.full_name as string) || (u.user_metadata?.name as string) || u.email?.split("@")[0] || "Member";

export const signInWithGoogle = () =>
  lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/industry-monitor" });
