import * as SC from "./GeneratorFormStyled";
import { Field, Formik, Form } from "formik";
import { validationTicketSchema } from "../../utils/ticketSchema";

const GeneratorForm = () => {
  return (
    <SC.GeneratorFormStyled>
      <Formik
        initialValues={{ avatar: null, fullName: "", email: "", gitLogin: "" }}
        validationSchema={validationTicketSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
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
              <Field type="text" name="fullName" />
            </div>

            <div>
              <label htmlFor="email">
                <h4>Email Address</h4>
              </label>
              <Field type="text" name="email" placeholder="example@email.com" />
            </div>

            <div>
              <label htmlFor="gitLogin">
                <h4>GitHub Username</h4>
              </label>
              <Field type="text" name="gitLogin" placeholder="@yourusername" />
            </div>

            <button type="submit">Generate My Ticket</button>
          </Form>
        )}
      </Formik>
    </SC.GeneratorFormStyled>
  );
};

export default GeneratorForm;
