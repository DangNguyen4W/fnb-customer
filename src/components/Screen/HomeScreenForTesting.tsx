"use client";

import { useState } from "react";
import { PageLayout } from "../Layouts/PageLayout";
import { testMergeUsers } from "@/lib/interview/mergeUsers";

const users = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" },
];

type User = {
  id: number;
  name: string;
  email: string;
};

interface SearchableUserListProps {
  users: User[];
}

function SearchableUserList({ users }: SearchableUserListProps) {
  const [query, setQuery] = useState("");

  const filteredUsers = query
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase()),
      )
    : users;

  return (
    <div>
      {!!users.length && (
        <>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          {filteredUsers.length &&
            filteredUsers.map((user) => (
              <div key={user.id}>
                {user.name} - {user.email}
              </div>
            ))}
          {!filteredUsers.length && <div>User not found</div>}
        </>
      )}
      {!users.length && <>No users</>}
    </div>
  );
}

function HomeScreen() {
  testMergeUsers();

  return (
    <PageLayout>
      <SearchableUserList users={users} />
    </PageLayout>
  );
}

export { HomeScreen };
