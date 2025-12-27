import { ordersCache, ordersDataSource, type Order } from "@/models/orders";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { Show } from "@toolpad/core/Crud";

export const Route = createFileRoute("/_layout/orders/$orderId/")({
  component: OrderDetailsPage,
});

function OrderDetailsPage() {
  const { orderId } = useParams({
    from: "/_layout/orders/$orderId/",
  });

  console.log("here in this page: ", orderId);

  return (
    <Show<Order>
      id={Number(orderId)}
      dataSource={ordersDataSource}
      dataSourceCache={ordersCache}
      pageTitle={`Order ${orderId}`}
    />
  );
}
