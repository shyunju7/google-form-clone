import * as React from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import TitleContainer from "../../components/TitleContainer";
import { RootState } from "../../store";
const Preview = () => {
  const { title, description } = useSelector((state: RootState) => state.form);

  return (
    <S.PreviewContainer>
      <TitleContainer
        formPreferences={{ title: title, description: description }}
      />
    </S.PreviewContainer>
  );
};

export default Preview;
