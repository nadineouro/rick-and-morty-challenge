import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockPagination, onChange } from "./mocks";
import Pagination from ".";

describe("Pagination", () => {
  it("should render pagination with correct current page", () => {
    render(<Pagination {...mockPagination} />);
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Page 1 is your current page" })
    ).toBeInTheDocument();
  });
  it("should trigger onChange event when click an available page", () => {
    render(<Pagination {...mockPagination} />);
    userEvent.click(screen.getByRole("button", { name: "Page 5" }));
    expect(onChange).toBeCalledTimes(1);
  });
  it("should not trigger onChange event when click current page", () => {
    render(<Pagination {...mockPagination} />);
    userEvent.click(
      screen.getByRole("button", { name: "Page 1 is your current page" })
    );
    expect(onChange).toBeCalledTimes(0);
  });
  it("should render pagination with disabled previous page", () => {
    render(<Pagination {...mockPagination} />);
    expect(
      screen.getByRole("button", { name: "Previous page" })
    ).toHaveAttribute("aria-disabled", "true");
  });
  it("should render pagination with enabled previous page", () => {
    render(<Pagination {...mockPagination} currentPage={2} />);
    expect(
      screen.getByRole("button", { name: "Previous page" })
    ).toHaveAttribute("aria-disabled", "false");
  });
  it("should render pagination with enabled next page", () => {
    render(<Pagination {...mockPagination} />);
    expect(screen.getByRole("button", { name: "Next page" })).toHaveAttribute(
      "aria-disabled",
      "false"
    );
  });
  it("should render pagination with disabled next page", () => {
    render(<Pagination {...mockPagination} currentPage={10} />);
    expect(screen.getByRole("button", { name: "Next page" })).toHaveAttribute(
      "aria-disabled",
      "true"
    );
  });
});
