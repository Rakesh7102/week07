import { expect, it } from "vitest";

// Temporary test to check that CI blocks build and push.
it("blocks build and push when a frontend test fails", () => {
  expect(true).toBe(false);
});