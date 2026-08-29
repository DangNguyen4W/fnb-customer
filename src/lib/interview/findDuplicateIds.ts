/* eslint-disable no-console */
import z from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
});

type User = z.infer<typeof UserSchema>;
type UserId = User["id"];
type Users = User[];

const users = z.array(UserSchema).parse([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Charlie" },
  { id: 3, name: "David" },
  { id: 2, name: "Eve" },
]);

const findDuplicateIds = (userList: Users): UserId[] => {
  const duplicateIds = new Set<UserId>();
  const existedIds = new Set<UserId>();
  userList.forEach((user) => {
    if (existedIds.has(user.id)) {
      duplicateIds.add(user.id);

      return;
    }
    existedIds.add(user.id);
  });

  return Array.from(duplicateIds);
};

export const testFindDuplicateIds = () => {
  const testUserGrouped = findDuplicateIds(users);

  console.log("🚀 ~ testUserGrouped:", testUserGrouped);
};
