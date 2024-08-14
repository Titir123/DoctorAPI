import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  console.log("Middleware executed for:", request.url);
  console.log("Token value:", token);

  if (!token) {
    console.log("Token not found");
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("Token found, proceeding to next response");
  return NextResponse.next();
}

export const config = {
  matcher: ["/cms/appointment", "/cms/blog/[slug]"],
};
