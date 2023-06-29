import * as React from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";

export interface FormPreferencesProps {
  title: string;
  description: string;
}

interface TitleContainerProps {
  formPreferences: FormPreferencesProps;
  handleOnChange?: (name: string, value: string) => void;
  handleOnBlur?: (name: string, value: string) => void;
}
const TitleContainer = ({
  formPreferences,
  handleOnChange,
  handleOnBlur,
}: TitleContainerProps) => {
  const location = useLocation();
  const { title, description } = formPreferences;
  const isPreview = location.pathname === "/preview";

  return (
    <S.TitleWrapper>
      <S.Input
        className="input_title"
        path={location.pathname}
        type="text"
        placeholder="설문지 제목"
        value={title}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange && handleOnChange("title", value)
        }
        onBlur={() => handleOnBlur && handleOnBlur("title", title)}
        readOnly={isPreview}
      />
      <S.Input
        className="input_description"
        path={location.pathname}
        type="text"
        placeholder="설문지 설명"
        value={description}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange && handleOnChange("description", value)
        }
        onBlur={() => handleOnBlur && handleOnBlur("description", description)}
        readOnly={isPreview}
      />
    </S.TitleWrapper>
  );
};

export default TitleContainer;
