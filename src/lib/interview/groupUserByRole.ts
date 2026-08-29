/* eslint-disable no-console */
import z from "zod";

enum UserRoles {
  ADMIN = "admin",
  "USER" = "user",
}

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.enum(UserRoles),
});

type Users = z.infer<typeof UserSchema>[];

type UsersGrouped = Partial<Record<UserRoles, Users>>;

const users = z.array(UserSchema).parse([
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "David", role: "user" },
]);

const groupUserByRole = (userList: Users): UsersGrouped => {
  return userList.reduce((result, user) => {
    const role = user.role;

    if (!result[role]) {
      result[role] = [user];
    } else {
      result[role].push(user);
    }

    return result;
  }, {} as UsersGrouped);
};

export const testGrouping = () => {
  const testUserGrouped = groupUserByRole(users);

  console.log("🚀 ~ testUserGrouped:", testUserGrouped);
};
