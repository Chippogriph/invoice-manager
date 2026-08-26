import { Outlet } from "@tanstack/react-router";

export function RootLayout() {
  return (
    <>
      <div>Hello "__root"!</div>
      <Outlet />
    </>
  );
}