import * as SC from "./GeneratorFormStyled";
import { useFormik } from "formik";
import { validationTicketSchema } from "../../utils/ticketSchema";

const GeneratorForm = ({ ticketSubmit }) => {
  const formik = useFormik({
    initialValues: { avatar: null, fullName: "", email: "", gitLogins: "" },
    validationSchema: validationTicketSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      ticketSubmit(values);
      setSubmitting(false);
    },
  });

  return (
    <SC.GeneratorFormStyled>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h4>Upload Avatar</h4>
          <input
            id="avatar"
            name="avatar"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("avatar", event.currentTarget.files[0]);
            }}
          />
          <img src="#" alt="uploadAvatarIcon" />
          <p>Drag and drop or click to upload</p>
        </div>

        <div>
          <label htmlFor="fullName">
            <h4>Full Name</h4>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
        </div>

        <div>
          <label htmlFor="email">
            <h4>Email Address</h4>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@email.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>

        <div>
          <label htmlFor="gitLogins">
            <h4>GitHub Username</h4>
          </label>
          <input
            type="text"
            id="gitLogins"
            name="gitLogins"
            placeholder="@yourusername"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gitLogin}
          />
        </div>

        <button type="submit">Generate My Ticket</button>
      </form>
    </SC.GeneratorFormStyled>
  );
};

export default GeneratorForm;
