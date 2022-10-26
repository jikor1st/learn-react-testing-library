import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요"); // input이 있는지 확인
    const button = getByText("등록"); // button이 있는지 확인
    return {
      ...utils,
      input,
      button,
    };
  };

  it("has input and a button", () => {
    /** before */
    // const { getByText, getByPlaceholderText } = render(<TodoForm />);
    // getByPlaceholderText("할 일을 입력하세요"); // input 이 있는지 확인
    // getByText("등록"); // button이 있는지 확인

    /** after */
    const { input, button } = setup();
    expect(input).toBeTruthy(); // 해당 값이 truthy 한 값인지 확인
    expect(button).toBeTruthy();
  });

  it("changes input", () => {
    /** before */
    // const { getByPlaceholderText } = render(<TodoForm />);
    // const input = getByPlaceholderText("할 일을 입력하세요");

    /** after */
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();

    /** before */
    // const { getByText, getByPlaceholderText } = render(
    //   <TodoForm onInsert={onInsert} />
    // );
    // const input = getByPlaceholderText("할 일을 입력하세요");
    // const button = getByText("등록");

    /** after */
    const { input, button } = setup({ onInsert }); // props 가 필요 할땐 직접 파라미터로 전달

    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute("value", ""); // input이 비워져야함
  });
});
