import { styled } from "styled-components";

interface TextProps {
  path: string;
}

export const TextInput = styled.input<TextProps>`
  width: 22.75rem;
  height: 1.75rem;
  margin-bottom: 1.75rem;
  border: none;
  border-bottom: ${(props) =>
    props.path === "/"
      ? "1px dotted var(--text-color)"
      : "1px solid var(--border-color)"};

  &:focus {
    border-width: 2px;
    border-color: var(--primary-color);
  }
`;

export const Textarea = styled.textarea<TextProps>`
  width: ${(props) => (props.path === "/" ? "38.75rem" : "100%")};
  margin-bottom: 1.75rem;
  border: none;
  resize: none;
  border-bottom: ${(props) =>
    props.path === "/"
      ? "1px dotted var(--text-color)"
      : "1px solid var(--border-color)"};

  &:focus {
    border-width: 2px;
    border-color: var(--primary-color);
  }
`;
