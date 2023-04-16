import { rest } from "msw";
import { mockCategories, mockProducts } from "./mocks";

const createRoute = (extension: string) =>
  `https://fakestoreapi.com${extension}`;

export const productHandlers = [
  rest.get(createRoute("/products/category/:category"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        mockProducts.filter(({ category }) => category === req.params.category)
      )
    );
  }),

  rest.get(createRoute("/products/categories"), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCategories));
  }),

  rest.get(createRoute("/products/:id"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockProducts.find(({ id }) => req.params.id === id.toString()))
    );
  }),

  rest.get(createRoute("/products"), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockProducts));
  }),
];
