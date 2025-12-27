import { createFileRoute, useParams } from "@tanstack/react-router";
import { Crud } from "@toolpad/core/Crud";
import { usersCache, usersDataSource, type User } from "@/models/users";

function UsersPage() {
  const { _splat } = useParams({ strict: false });
  const userId = _splat?.split("/")[0];

  //   const editNoteId = matchPath('/notes/:noteId/edit', router.pathname);
  return (
    <Crud<User>
      dataSource={usersDataSource}
      dataSourceCache={usersCache}
      rootPath="/users"
      initialPageSize={5}
      defaultValues={{ title: "New note" }}
      pageTitles={{
        create: "New User",
        edit: `User ${userId} - Edit`,
        show: `User ${userId}`,
      }}
    />
  );
}

export const Route = createFileRoute("/_layout/users/$")({
  component: UsersPage,
});
