/* eslint-disable no-console */
import z from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  role: z.enum(["admin", "user"]),
});
const UserUpdateSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  email: z.string().optional(),
  role: z.enum(["admin", "user"]).optional(),
});

type User = z.infer<typeof UserSchema>;

type UserUpdate = z.infer<typeof UserUpdateSchema>;

const users = z.array(UserSchema).parse([
  {
    id: 1,
    name: "Alice",
    email: "alice@test.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@test.com",
    role: "user",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@test.com",
    role: "user",
  },
]);

const updates = z.array(UserUpdateSchema).parse([
  {
    id: 2,
    name: "Bobby",
  },
  {
    id: 1,
    email: "new-alice@test.com",
    role: "user",
  },
  {
    id: 2,
    name: "Bobbyyyy",
  },
]);

function mergeUsers(users: User[], updates: UserUpdate[]): User[] {
  const mapUsersUpdate = new Map<UserUpdate["id"], UserUpdate>();

  updates.forEach((userUpdate) =>
    mapUsersUpdate.set(userUpdate.id, userUpdate),
  );

  return users.map((user) => {
    const updateUser = mapUsersUpdate.get(user.id);

    return updateUser
      ? {
          ...user,
          ...updateUser,
        }
      : user;
  });
}

export const testMergeUsers = () => {
  console.log(mergeUsers(users, updates));
};
