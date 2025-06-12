import * as SC from "./GeneratorFormStyled";
import { useFormik } from "formik";
import { validationTicketSchema } from "../../utils/ticketSchema";
import { useRef } from "react";

const GeneratorForm = ({ ticketSubmit }) => {
  const fileInputRef = useRef(null);

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
          <label>Upload Avatar</label>
          <SC.AvatarInputStyled>
            <div onClick={() => fileInputRef.current?.click()}>
              <input
                ref={fileInputRef}
                id="avatar"
                name="avatar"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(event) => {
                  formik.setFieldValue("avatar", event.currentTarget.files[0]);
                }}
              />
            </div>
            <p>Drag and drop or click to upload</p>
          </SC.AvatarInputStyled>

          {formik.touched.avatar && formik.errors.avatar ? (
            <div>{formik.errors.avatar}</div>
          ) : (
            <div>Upload your photo (JPG or PNG, max size: 500KB).</div>
          )}
        </div>

        <SC.TextInputConStyled>
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
        </SC.TextInputConStyled>

        <SC.TextInputConStyled>
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
        </SC.TextInputConStyled>

        <SC.TextInputConStyled>
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
        </SC.TextInputConStyled>

        <SC.SubmitButtonStyled type="submit">
          Generate My Ticket
        </SC.SubmitButtonStyled>
      </form>
    </SC.GeneratorFormStyled>
  );
};

export default GeneratorForm;
