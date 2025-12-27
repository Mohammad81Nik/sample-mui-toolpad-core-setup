import {
  DataSourceCache,
  type DataModel,
  type DataSource,
} from "@toolpad/core/Crud";

export interface User extends DataModel {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

let USER_MOCK_DATA: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    created_at: "2023-01-01",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    created_at: "2023-01-02",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john.smith@example.com",
    created_at: "2023-01-03",
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    created_at: "2023-01-04",
  },
  {
    id: 5,
    name: "John Johnson",
    email: "john.johnson@example.com",
    created_at: "2023-01-05",
  },
  {
    id: 6,
    name: "Jane Johnson",
    email: "jane.johnson@example.com",
    created_at: "2023-01-06",
  },
  {
    id: 7,
    name: "John Brown",
    email: "john.brown@example.com",
    created_at: "2023-01-07",
  },
  {
    id: 8,
    name: "Jane Brown",
    email: "jane.brown@example.com",
    created_at: "2023-01-08",
  },
  {
    id: 9,
    name: "John Davis",
    email: "john.davis@example.com",
    created_at: "2023-01-09",
  },
  {
    id: 10,
    name: "Jane Davis",
    email: "jane.davis@example.com",
    created_at: "2023-01-10",
  },
];

export const usersDataSource = {
  fields: [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "created_at", headerName: "Created At" },
  ],

  getMany: async ({ paginationModel }) => {
    await new Promise((res) => setTimeout(res, 2000));

    // Apply pagination
    const start = paginationModel.page * paginationModel.pageSize;
    const end = start + paginationModel.pageSize;
    const paginatedUsers = USER_MOCK_DATA.slice(start, end);

    return {
      items: paginatedUsers,
      itemCount: 10,
    };
  },

  getOne: async function (userId) {
    await new Promise((res) => setTimeout(res, 2000));

    const user = USER_MOCK_DATA.find((user) => user.id === Number(userId));

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },

  createOne: async ({
    name = "new user",
    email = "sample@domain.com",
    created_at = new Date().toISOString(),
  }) => {
    const newUser = {
      id: USER_MOCK_DATA.length + 1,
      name,
      email,
      created_at,
    };

    USER_MOCK_DATA.push(newUser);

    await new Promise((res) => setTimeout(res, 2000));

    return newUser;
  },

  deleteOne: async (userId) => {
    const user = USER_MOCK_DATA.find((user) => user.id === Number(userId));

    if (!user) {
      throw new Error("User not found");
    }

    USER_MOCK_DATA = USER_MOCK_DATA.filter(
      (user) => user.id !== Number(userId)
    );
  },
} satisfies DataSource<User>;

export const usersCache = new DataSourceCache();
