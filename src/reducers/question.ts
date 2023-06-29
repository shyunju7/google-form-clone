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

interface QuestionListProps {
  questions: Array<QuestionProps>;
}

const initialState: QuestionListProps = {
  questions: [],
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
  },
});

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
