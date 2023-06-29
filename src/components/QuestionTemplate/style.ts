import { styled } from "styled-components";

export const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.375rem 1.5rem 1.5rem 1.5rem;
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

  .question_input {
    width: 100%;
    height: 3.5rem;
    max-width: 27.875rem;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid var(--border-color);
    background-color: #fafafafa;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .question_input:focus {
    border-bottom: 2px solid var(--primary-color);
  }
`;
