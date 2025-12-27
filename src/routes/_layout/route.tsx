import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
