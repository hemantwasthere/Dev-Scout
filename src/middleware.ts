export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/your-rooms",
    "/browse",
    "/edit-room",
    "/edit-room/:roomId*",
    "/rooms",
    "/rooms/:roomId*",
  ],
};
