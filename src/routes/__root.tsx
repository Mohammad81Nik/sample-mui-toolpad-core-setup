import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterAppProvider } from "@toolpad/core/tanstack-router";
import type { QueryClient } from "@tanstack/react-query";
import type { Branding, Navigation } from "@toolpad/core/AppProvider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import { queryClient } from "@/lib/react-query";
import { Provider } from "@/integrations/tanstack-query/root-provider";

interface MyRouterContext {
  queryClient: QueryClient;
}

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main Items",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "orders",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "Users",
    title: "Users",
    icon: <GroupIcon />,
    pattern: "users{/:userId}*",
  },
];

const BRANDING: Branding = {
  title: "Sample Toolpad Setup",
};

function App() {
  return (
    <TanStackRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Provider queryClient={queryClient}>
        <Outlet />
      </Provider>
    </TanStackRouterAppProvider>
  );
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: App,
});
