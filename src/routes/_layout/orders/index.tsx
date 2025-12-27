import { ordersCache, ordersDataSource, type Order } from "@/models/orders";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { List } from "@toolpad/core/Crud";

function OrdersPage() {
  const navigate = useNavigate();
  return (
    <List<Order>
      dataSource={ordersDataSource}
      dataSourceCache={ordersCache}
      initialPageSize={10}
      pageTitle="Orders"
      onRowClick={(row) => {
        navigate({ to: `/orders/${row}` });
      }}
    />
  );
}

export const Route = createFileRoute("/_layout/orders/")({
  component: OrdersPage,
});
