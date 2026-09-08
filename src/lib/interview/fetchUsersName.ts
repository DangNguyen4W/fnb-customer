/* eslint-disable no-console */
import { faker } from "@faker-js/faker";

interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  const name = faker.person.firstName();
  const delay = Math.random() * 1000;

  return new Promise((resolve, reject) => {
    if (id === 3) {
      reject("Id must difference with 3");
    }

    setTimeout(() => {
      resolve({ id, name });
    }, delay);
  });
}

async function fetchUserNames(ids: number[]): Promise<string[]> {
  const users = await Promise.all(ids.map((id) => fetchUser(id)));

  return users.map((user) => user.name);
}

export const testFetch = async () => {
  const names = await fetchUserNames([1, 2, 5, 4]);
  console.log("🚀 ~ testFetch ~ names:", names);
};
