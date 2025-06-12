import * as Yup from "yup";

export const validationTicketSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .nullable()
    // .required("Avatar is required")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        !value || (value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
    ),

  fullName: Yup.string()
    .min(2, "Too short")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  gitLogins: Yup.string()
    .min(2, "Too short")
    .required("GitHub username is required"),
});
