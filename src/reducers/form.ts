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
      const { title } = action.payload;
      state.title = title;
    },

    updateFormDescription: (state, action) => {
      const { description } = action.payload;
      state.description = description;
    },
  },
});

export const { updateFormTitle, updateFormDescription } = formSlice.actions;
export default formSlice.reducer;
