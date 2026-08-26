import { Outlet } from "@tanstack/react-router";
import SiteHeader from "./SiteHeader";
import Sidebar from "./Sidebar";

export function RootLayout() {
  return (
    <div className="container">
      <SiteHeader />
      <div className="flex">
        <Sidebar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
