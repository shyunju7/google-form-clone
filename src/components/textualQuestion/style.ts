import { styled } from "styled-components";

export const TextInput = styled.input<{ $isMain: boolean }>`
  width: 22.75rem;
  height: 1.75rem;
  margin-bottom: 1.75rem;
  border: none;
  border-bottom: ${(props) =>
    props.$isMain
      ? "1px dotted var(--text-color)"
      : "1px solid var(--border-color)"};

  &:focus {
    border-bottom: ${(props) =>
      props.$isMain
        ? "1px dotted var(--text-color)"
        : "2px solid var(--primary-color)"};
  }
`;

export const Textarea = styled.textarea<{ $isMain: boolean }>`
  width: ${(props) => (props.$isMain ? "38.75rem" : "100%")};
  margin-bottom: 1.75rem;
  border: none;
  resize: none;
  border-bottom: ${(props) =>
    props.$isMain
      ? "1px dotted var(--text-color)"
      : "1px solid var(--border-color)"};

  &:focus {
    border-bottom: ${(props) =>
      props.$isMain
        ? "1px dotted var(--text-color)"
        : "2px solid var(--primary-color)"};
  }
`;
