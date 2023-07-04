import { styled } from "styled-components";
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";
import { MdRemoveRedEye } from "@react-icons/all-files/md/MdRemoveRedEye";
export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 48.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 7.5rem auto 2rem auto;
  background-color: transparent;

  .drag_container {
    width: 100%;
    max-width: 48.125rem;
  }

  .main_header {
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: white;
    z-index: 100;
    border-bottom: 1px solid #dadce0;
  }

  .main_menu_top {
    width: 100%;
    height: 3.75rem;
  }

  .main_menu_bottom {
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuItem = styled.li<{ $isCurrentTab: boolean }>`
  display: inline-block;
  margin: 0 0.5rem;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: ${(props) => (props.$isCurrentTab ? "bold" : "500")};

  cursor: pointer;
  color: ${(props) =>
    props.$isCurrentTab ? "var(--primary-color)" : "var(--text-color)"};
`;

export const AddButton = styled(MdAddCircleOutline)`
  position: fixed;
  bottom: 32px;
  right: 48px;
  color: var(--hint-text-color);
  font-size: 2.5rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 920px) {
    position: static;
    margin: 2rem 0;
  }
`;

export const PreviewButton = styled(MdRemoveRedEye)`
  position: fixed;
  bottom: 96px;
  right: 48px;
  color: var(--hint-text-color);
  font-size: 2.5rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 920px) {
    position: static;
    margin: 2rem 0;
  }
`;
