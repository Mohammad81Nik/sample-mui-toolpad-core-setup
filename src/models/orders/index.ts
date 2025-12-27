import {
  DataSourceCache,
  type DataModel,
  type DataSource,
} from "@toolpad/core/Crud";

export interface Order extends DataModel {
  id: number;
  customer_id: number;
  delivery_date: string;
  status: string;
}

let ORDERS_MOCK_DATA: Order[] = [
  { id: 1, customer_id: 1, delivery_date: "2023-01-01", status: "Pending" },
  { id: 2, customer_id: 2, delivery_date: "2023-01-02", status: "Shipped" },
  { id: 3, customer_id: 3, delivery_date: "2023-01-03", status: "Delivered" },
  { id: 4, customer_id: 3, delivery_date: "2023-01-03", status: "Delivered" },
  { id: 5, customer_id: 3, delivery_date: "2023-01-03", status: "Delivered" },
];

export const ordersDataSource = {
  fields: [
    { field: "id", headerName: "ID" },
    { field: "customer_id", headerName: "Customer ID" },
    { field: "delivery_date", headerName: "Delivery Date" },
    { field: "status", headerName: "Status" },
  ],

  getMany: async ({ paginationModel }) => {
    // Apply pagination
    const start = paginationModel.page * paginationModel.pageSize;
    const end = start + paginationModel.pageSize;
    const paginatedUsers = ORDERS_MOCK_DATA.slice(start, end);

    return {
      items: paginatedUsers,
      itemCount: 10,
    };
  },

  getOne: async (orderId) => {
    const order = ORDERS_MOCK_DATA.find(
      (order) => order.id === Number(orderId)
    );

    if (!order) {
      throw new Error("Order not found");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return order;
  },
} satisfies DataSource<Order>;

export const ordersCache = new DataSourceCache();
