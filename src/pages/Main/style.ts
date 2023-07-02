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
  padding-top: 0.75rem;
  margin: 0 auto;
  background-color: transparent;

  .drag_container {
    width: 100%;
    max-width: 48.125rem;
  }
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
