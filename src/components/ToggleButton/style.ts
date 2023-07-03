import { styled } from "styled-components";

export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 0.5rem;

  > .toggle {
    width: 2.3125rem;
    height: 0.875rem;
    border-radius: 30px;
    background-color: #b9b9b9;
  }
  > .checked {
    background-color: rgb(225, 216, 241);
    transition: 0.5s;
  }

  > .toggle_indicator {
    position: absolute;
    top: -2.5px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
    transition: background-color 0.3s ease;
  }
  > .checked_indicator {
    background-color: var(--primary-color);
    transition: left 1s ease;
    left: 18px;
  }
`;
