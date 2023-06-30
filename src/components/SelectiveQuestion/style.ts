import { styled } from "styled-components";

export const SelectiveQuestionContainer = styled.div`
  width: 100%;
  .question_options {
    list-style: none;
  }

  .question_options li {
    padding: 0.5rem 0;
  }

  input {
    font-size: 1rem;
    border: none;
    margin-bottom: 0.5rem;
  }

  .add_option_input:hover {
    width: 4.5rem;
    border-bottom: 1px solid var(--border-color);
  }
`;
