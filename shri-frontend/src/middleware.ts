import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabaseResponse, user } = await updateSession(request);
  const { nextUrl } = request;
  const isAuthenticated = !!user;

  const protectedPaths = ["/community"];
  const isProtected = protectedPaths.some((path) =>
    nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !isAuthenticated) {
    const signInUrl = new URL("/auth/signin", nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", nextUrl.pathname);
    return Response.redirect(signInUrl);
  }

  if (nextUrl.pathname.startsWith("/auth/signin") && isAuthenticated) {
    return Response.redirect(new URL("/community", nextUrl.origin));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/community/:path*", "/auth/signin"],
};
