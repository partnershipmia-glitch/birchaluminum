import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionEmail(session?.user?.email ?? null);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSessionEmail(data.session?.user?.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/auth" },
        });
        if (error) throw error;
        if (!data.session) {
          toast.success("Check your email to confirm your account.");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Signed in.");
        navigate("/");
      }
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!email) {
      toast.error("Enter your email first.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/reset-password",
    });
    if (error) toast.error(error.message);
    else toast.success("Password reset email sent.");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">
          {sessionEmail ? "Account" : mode === "signin" ? "Sign in" : "Create account"}
        </h1>

        {sessionEmail ? (
          <div className="mt-6 space-y-4">
            <p className="text-muted-foreground">
              Signed in as <span className="font-medium text-foreground">{sessionEmail}</span>
            </p>
            <Button className="w-full" onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        ) : (
          <>
            <p className="mt-2 text-sm text-muted-foreground">
              Use your email address and a password.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
              </Button>
            </form>

            <div className="mt-4 flex items-center justify-between text-sm">
              <button
                type="button"
                className="text-muted-foreground underline-offset-4 hover:underline"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              >
                {mode === "signin" ? "Create an account" : "I already have an account"}
              </button>
              <button
                type="button"
                className="text-muted-foreground underline-offset-4 hover:underline"
                onClick={handleReset}
              >
                Forgot password?
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Auth;
