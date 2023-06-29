import { styled } from "styled-components";

interface SelectBoxProps {
  show: string;
}

interface SelectOptionProps {
  current: string;
}

export const SelectBox = styled.div`
  position: relative;
  width: 13rem;
  height: 3rem;
  padding: 0.5rem 3rem;
  border-radius: 0.25rem;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid var(--border-color);
  cursor: pointer;

  label {
    font-size: 1rem;
    line-height: 1.8rem;
  }
`;

export const SelectOptions = styled.ul<SelectBoxProps>`
  position: absolute;
  list-style: none;
  top: -3rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 15rem;
  max-height: ${(props) => (props.show === "true" ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: white;
  color: var(--text-color);

  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
`;
export const Option = styled.li<SelectOptionProps>`
  font-size: 1rem;
  height: 3rem;
  padding: 0.5rem 1.625rem 0.5rem 3rem;
  background-color: ${(props) =>
    props.current === "current" ? "#EFF4FD" : "transparent"};
  line-height: 1.9;

  &:hover {
    background-color: #eeeeee;
  }
`;
