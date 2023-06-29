import * as React from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";

interface TextualQuestionProps {
  qType: string;
}

const TextualQuestion = ({ qType }: TextualQuestionProps) => {
  const textarea = React.useRef<HTMLTextAreaElement>(null);
  const location = useLocation();
  const SHORT_ANSWER_TYPE = "SHORT_ANSWER_TYPE";
  const isShortType = qType === SHORT_ANSWER_TYPE;
  const isMain = location.pathname === "/";

  const handleResizeTextArea = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto";
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  };

  return (
    <div>
      {isShortType ? (
        <S.TextInput
          type="text"
          path={location.pathname}
          readOnly={isMain}
          placeholder={isMain ? "단답형 텍스트" : "내 답변"}
        />
      ) : (
        <S.Textarea
          ref={textarea}
          path={location.pathname}
          readOnly={isMain}
          placeholder={isMain ? "장문형 텍스트" : "내 답변"}
          rows={1}
          onChange={handleResizeTextArea}
        />
      )}
    </div>
  );
};

export default TextualQuestion;
