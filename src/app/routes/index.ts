type SubPageCallback = (unique: string | number) => string;

type Page = { base: string } & Record<string, string | SubPageCallback>;

type Route = Record<string, Page>;

export const routes = {
  home: {
    base: "/",
  },
  product: {
    base: "/product",
    detail(id) {
      return `${this.base}/${id.toString()}`;
    },
  },
} satisfies Route;
