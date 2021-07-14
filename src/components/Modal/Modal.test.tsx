import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from ".";

const onClose = jest.fn();

describe("Modal", () => {
  it("should render modal with correct content", () => {
    render(<Modal open>Content</Modal>);
    const modalOverlay = screen.getByTestId("modalOverlay");
    const modal = screen.getByTestId("modal");

    expect(modalOverlay).toHaveStyle(`display: block`);
    expect(modal).toHaveStyle(`display: block`);
    expect(modal).toHaveTextContent("Content");
  });
  it("should not render modal", () => {
    render(<Modal open={false} />);
    const modalOverlay = screen.getByTestId("modalOverlay");
    const modal = screen.getByTestId("modal");

    expect(modalOverlay).toHaveStyle(`display: none`);
    expect(modal).toHaveStyle(`display: none`);
  });
  it("should trigger onClose event on click outside of modal content", () => {
    render(<Modal open onClose={onClose} />);
    userEvent.click(screen.getByTestId("modalOverlay"));
    expect(onClose).toBeCalledTimes(1);
  });
  it("should not trigger onClose event when click inside modal content", () => {
    render(<Modal open onClose={onClose} />);
    userEvent.click(screen.getByTestId("modal"));
    expect(onClose).toBeCalledTimes(0);
  });
});
