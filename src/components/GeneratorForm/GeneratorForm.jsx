import * as SC from "./GeneratorFormStyled";
import { useFormik } from "formik";
import { validationTicketSchema } from "../../utils/ticketSchema";
import { useMemo, useRef } from "react";

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

  const avatarURL = useMemo(() => {
    return formik.values.avatar
      ? URL.createObjectURL(formik.values.avatar)
      : null;
  }, [formik.values.avatar]);

  const resetAvatar = () => {
    formik.setFieldValue("avatar", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // ← clear the native file input
    }
  };

  const changeImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <SC.GeneratorFormStyled>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Upload Avatar</label>
          <SC.AvatarInputStyled avatar={avatarURL}>
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
            {formik.values.avatar ? (
              <SC.AvatarButtonsCon>
                <button type="button" onClick={resetAvatar}>
                  Remove image
                </button>{" "}
                <button type="button" onClick={changeImage}>
                  Change image
                </button>
              </SC.AvatarButtonsCon>
            ) : (
              <p> "Drag and drop or click to upload"</p>
            )}
          </SC.AvatarInputStyled>

          {formik.touched.avatar && formik.errors.avatar ? (
            <div>{formik.errors.avatar}</div>
          ) : (
            <SC.UploadMessage>Upload your photo (JPG or PNG, max size: 500KB).</SC.UploadMessage>
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
