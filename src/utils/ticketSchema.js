import * as Yup from "yup";

export const validationTicketSchema = Yup.object().shape({
  bill: Yup.number()
    .typeError("Amount must be a number")
    .min(0)
    .required("Can't be a zero"),
  people: Yup.number()
    .typeError("Must be a number")
    .min(0)
    .required("Can't be a zero"),
});