type QuestionType = {
  SHORT_ANSWER_TYPE: string;
  LONG_ANSWER_TYPE: string;
  MULTIPLE_CHOICE_TYPE: string;
  CHECKBOX_TYPE: string;
  DROPDOWN_TYPE: string;
  [key: string]: string;
};
export const questionTypes: QuestionType = {
  SHORT_ANSWER_TYPE: "단답형",
  LONG_ANSWER_TYPE: "장문형",
  MULTIPLE_CHOICE_TYPE: "객관식 질문",
  CHECKBOX_TYPE: "체크박스",
  DROPDOWN_TYPE: "드롭다운",
};
