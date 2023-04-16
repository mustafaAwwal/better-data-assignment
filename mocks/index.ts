import { setupServer } from "msw/node";
import { productHandlers } from "./products";
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...productHandlers);
