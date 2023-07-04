import { styled } from "styled-components";

export const TitleWrapper = styled.div`
  width: 100%;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

export const Border = styled.div`
  width: calc(100% + 0.125rem);
  height: 0.75rem;
  background-color: var(--primary-color);
  margin-bottom: 1.375rem;
  box-sizing: content-box;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Input = styled.input<{
  $isPreview: boolean;
}>`
  width: 100%;
  max-width: 45rem;
  border: none;
  border-bottom: ${(props) =>
    props.$isPreview && "1px solid var(--border-color)"};

  &:focus {
    border-bottom: ${(props) =>
      props.$isPreview && "2px solid var(--primary-color)"};
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
