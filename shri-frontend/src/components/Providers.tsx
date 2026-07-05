"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";

type SupabaseContext = {
  user: User | null;
  supabase: ReturnType<typeof createClient>;
};

const Context = createContext<SupabaseContext | null>(null);

export function useSupabase() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useSupabase must be used within Providers");
  return ctx;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === "SIGNED_IN" || event === "SIGNED_OUT") router.refresh();
    });

    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    return () => subscription.unsubscribe();
  }, [supabase, router]);

  return (
    <Context.Provider value={{ user, supabase }}>
      {children}
    </Context.Provider>
  );
}
