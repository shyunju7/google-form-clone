import * as React from "react";
import * as S from "./style";

const TitleContainer = () => {
  // 입력창에서 focusout될 때, 저장 필요

  return (
    <S.TitleWrapper>
      <S.Input className="input_title" type="text" placeholder="설문지 제목" />
      <S.Input
        className="input_description"
        type="text"
        placeholder="설문지 설명"
      />
    </S.TitleWrapper>
  );
};

export default TitleContainer;
