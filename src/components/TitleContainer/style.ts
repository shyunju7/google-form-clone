import { styled } from "styled-components";

export const TitleWrapper = styled.div`
  width: 100%;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.375rem 0rem 1.5rem 0rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  border-top: 12px solid var(--primary-color); // 임시 타이틀 엣지
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  width: 100%;
  max-width: 45rem;
  border: none;
  border-bottom: 1px solid var(--border-color);

  &:focus {
    border-bottom: 2px solid var(--primary-color);
  }

  &.input_title {
    font-size: 2rem;
    line-height: 2.625rem;
    margin-bottom: 0.5rem;
  }

  &.input_description {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;
