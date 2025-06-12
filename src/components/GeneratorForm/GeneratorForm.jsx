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
             {formik.touched.avatar && formik.errors.avatar && (
            <div>{formik.errors.avatar}</div>
          )}
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
           {formik.touched.fullName && formik.errors.fullName && (
            <div>{formik.errors.fullName}</div>
          )}
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
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
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
           {formik.touched.gitLogins && formik.errors.gitLogins && (
            <div>{formik.errors.gitLogins}</div>
          )}
        </div>

        <button type="submit">Generate My Ticket</button>
      </form>
    </SC.GeneratorFormStyled>
  );
};

export default GeneratorForm;
