import { styled } from "styled-components";

interface SelectOptionProps {
  $isCurrent: boolean;
  type: string;
}

export const SelectBox = styled.div`
  position: relative;
  width: 13rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid var(--border-color);
  cursor: pointer;

  .label_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  label {
    font-size: 1rem;
    line-height: 1.8rem;
    background-color: transparent;
    margin-left: 0.5rem;
  }
`;

export const SelectOptions = styled.ul<{ $isShow: boolean }>`
  position: absolute;
  list-style: none;
  top: -3rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 15rem;
  max-height: ${(props) => (props.$isShow ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: white;
  color: var(--text-color);
  z-index: 10;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
`;
export const Option = styled.li<SelectOptionProps>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  height: 3rem;
  padding: 0.5rem 1.625rem 0.5rem 1rem;
  background-color: ${(props) =>
    props.$isCurrent ? "#EFF4FD" : "transparent"};
  &:hover {
    background-color: #eeeeee;
  }
`;
