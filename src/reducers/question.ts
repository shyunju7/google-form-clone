import { createSlice } from "@reduxjs/toolkit";
interface QuestionOptionProps {
  name: string;
  value: string;
}

interface QuestionProps {
  id: number;
  qType: string;
  query: string;
  isRequired: boolean;
  hasOptions: boolean;
  options?: Array<QuestionOptionProps>;
}

const initialState: QuestionProps[] = [];

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.push(action.payload);
    },
    updateQuestionQuery: (state, action) => {
      const { id, query } = action.payload;
      const question = state.find((item) => item.id === id);

      if (question) {
        question.query = query;
      }
    },
  },
});

export const { addQuestion, updateQuestionQuery } = questionSlice.actions;
export default questionSlice.reducer;
