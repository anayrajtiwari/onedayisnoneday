import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://shri-backend.vercel.app";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/community";
  const callbackUrl = searchParams.get("callbackUrl") ?? next;
  const mode = searchParams.get("mode") ?? "login";

  if (code) {
    const supabase = await createClient();
    const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error && session?.user?.email) {
      // Sync Google / OAuth user with community backend database
      try {
        const res = await fetch(`${origin}/api/auth/google`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: session.user.email,
            name: session.user.user_metadata?.name || session.user.email.split("@")[0],
            avatarUrl: session.user.user_metadata?.avatar_url || null,
            supabaseUid: session.user.id,
            mode,
          }),
        });

        const data = await res.json();

        if (!data.success) {
          // If unregistered user tried to log in via Google
          await supabase.auth.signOut();
          return NextResponse.redirect(
            `${origin}/auth/signin?error=${encodeURIComponent(data.message || "User not registered")}`
          );
        }
      } catch (syncErr) {
        console.warn("[AUTH CALLBACK SYNC WARNING]: Could not sync with backend DB:", syncErr);
      }

      return NextResponse.redirect(`${origin}${callbackUrl}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/signin?error=auth_callback_error`);
}
