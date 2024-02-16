import * as Yup from "yup";

export const signUpSchema = Yup.object({
  FullName: Yup.string().min(2).max(25).required("Please enter your name"),
  Dob: Yup.date().required("Please enter your dob"),
  Gender: Yup.string().required("Please enter your gender"),
  BioData: Yup.string().required("Please enter your biodata"),
});
