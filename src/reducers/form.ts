import { createSlice } from "@reduxjs/toolkit";

interface FormType {
  title: string;
  description: string;
}

const initialState: FormType = {
  title: "제목 없는 설문지",
  description: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormTitle: (state, action) => {
      state.title = action.payload;
    },

    updateFormDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { updateFormTitle, updateFormDescription } = formSlice.actions;
export default formSlice.reducer;
