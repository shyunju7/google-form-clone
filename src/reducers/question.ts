import { createSlice } from "@reduxjs/toolkit";

export interface QuestionOptionProps {
  uid: number;
  name: string;
}

interface QuestionProps {
  id: number;
  qType: string;
  query: string;
  isRequired: boolean;
  hasOptions: boolean;
  options: QuestionOptionProps[];
}

const initialState: QuestionProps[] = [];

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.push({
        id: new Date().valueOf(),
        ...action.payload,
      });
    },
    updateQuestionQuery: (state, action) => {
      const { id, query } = action.payload;
      const question = state.find((item) => item.id === id);

      if (question) {
        question.query = query;
      }
    },
    updateQuestionType: (state, action) => {
      const { id, qType } = action.payload;
      const question = state.find((item) => item.id === id);

      if (question) {
        switch (qType) {
          case "SHORT_ANSWER_TYPE":
          case "LONG_ANSWER_TYPE":
            question.qType = qType;
            question.hasOptions = false;
            question.options = [];
            break;

          case "MULTIPLE_CHOICE_TYPE":
          case "CHECKBOX_TYPE":
          case "DROPDOWN_TYPE":
            question.qType = qType;
            question.hasOptions = true;
            question.options = [];
            question.options.push({
              uid: 1,
              name: "옵션 1",
            });
            break;
          default:
            break;
        }
      }
    },
    deleteQuestion: (state, action) => {
      const { id } = action.payload;
      return state.filter((question) => question.id !== id);
    },
    copyQuestion: (state, action) => {
      const { id } = action.payload;
      const question = state.find((item) => item.id === id);
      const index = state.findIndex((item) => item.id === id);
      if (question) {
        const nQuestion = {
          id: new Date().valueOf(),
          qType: question.qType,
          query: question.query,
          isRequired: question.isRequired,
          hasOptions: question.hasOptions,
          options: question.options,
        };

        state.splice(index + 1, 0, nQuestion);
      }
    },
    changeRequiredProperty: (state, action) => {
      const { id } = action.payload;
      const question = state.find((item) => item.id === id);
      if (question) {
        question.isRequired = !question.isRequired;
      }
    },
    addQuestionOptions: (state, action) => {
      const { id, name } = action.payload;
      const question = state.find((item) => item.id === id);
      const length = question && question.options.length;
      length &&
        length > 0 &&
        question.options?.push({
          uid: length,
          name,
        });
    },
    updateQuestionOption: (state, action) => {
      const { id, uid, name: nName } = action.payload;
      const question = state.find((item) => item.id === id);
      if (question) {
        question.options = question.options.map((option) =>
          option.uid === uid ? { ...option, name: nName } : option
        );
      }
    },
  },
});

export const {
  addQuestion,
  updateQuestionQuery,
  updateQuestionType,
  deleteQuestion,
  copyQuestion,
  changeRequiredProperty,
  addQuestionOptions,
  updateQuestionOption,
} = questionSlice.actions;
export default questionSlice.reducer;
