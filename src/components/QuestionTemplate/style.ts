import { styled } from "styled-components";

export const QuestionContainer = styled.div<{ $isPreview: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    props.$isPreview
      ? "1.375rem 1.5rem 1.5rem 1.5rem"
      : "1.375rem 1.5rem 0 1.5rem"};
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
  margin-top: 0.75rem;
`;

export const QuestionCreator = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;

  .question_input {
    width: 100%;
    height: 3.5rem;
    max-width: 27.875rem;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid var(--text-color);
    background-color: #fafafafa;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .question_input,
  question_input_main:focus {
    border-bottom: 2px solid var(--primary-color);
  }

  .required_indicator {
    color: red;
    margin-left: 0.5rem;
  }
`;

export const QuestionFooter = styled.div`
  width: 100%;
  height: 4.0625rem;
  border-top: 1px solid var(--border-color);

  .question_footer_wrapper {
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    float: right;
  }

  .question_footer_required_label {
    display: flex;
    align-items: center;
  }
`;
