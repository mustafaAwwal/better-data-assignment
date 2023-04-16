import { useRouter } from "next/router";
import React from "react";
import { MainLayout } from ".";
import { render, screen } from "../../test-utils";

const setup = () => {
  render(
    <MainLayout>
      <div>hello</div>
    </MainLayout>
  );
};

describe("<MainLayout />", () => {
  beforeAll(() => {
    (useRouter as jest.Mock).mockReturnValue({ query: { search: "" } });
  });
  it("should render without error", () => {
    setup();
  });

  it("should render children", () => {
    setup();
    expect(screen.getByText(/hello/i)).toBeVisible();
  });
});
