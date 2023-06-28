import * as React from "react";
import * as S from "./style";

export interface FormPreferencesProps {
  title: string;
  description: string;
}

interface TitleContainerProps {
  formPreferences: FormPreferencesProps;
  handleOnChange: (name: string, value: string) => void;
  handleOnBlur: (name: string, value: string) => void;
}
const TitleContainer = ({
  formPreferences,
  handleOnChange,
  handleOnBlur,
}: TitleContainerProps) => {
  const { title, description } = formPreferences;
  return (
    <S.TitleWrapper>
      <S.Input
        className="input_title"
        type="text"
        placeholder="설문지 제목"
        value={title}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange("title", value)
        }
        onBlur={() => handleOnBlur("title", title)}
      />
      <S.Input
        className="input_description"
        type="text"
        placeholder="설문지 설명"
        value={description}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange("description", value)
        }
        onBlur={() => handleOnBlur("description", description)}
      />
    </S.TitleWrapper>
  );
};

export default TitleContainer;
