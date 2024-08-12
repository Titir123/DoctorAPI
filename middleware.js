import { NextResponse } from "next/server";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token) {
    console.log("Token not found");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  console.log("Token found, proceeding to next response");
  return NextResponse.next();
}

export const config = {
  matcher: ["/cms/:path*", "/"],
};
