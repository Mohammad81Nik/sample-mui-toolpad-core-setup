import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

function DashboardPage() {
  return <Typography>This is sample toolpad core</Typography>;
}

export const Route = createFileRoute("/_layout/")({
  component: DashboardPage,
});
