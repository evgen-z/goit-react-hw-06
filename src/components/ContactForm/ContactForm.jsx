import css from "./ContacrForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function ContactForm({ addContact }) {
  const initialValues = { name: "", number: "" };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();
  

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .required("Required")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67"),
  });

 

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact))
    
    resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        validationSchema={feedbackSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.input}>
            <label htmlFor={nameFieldId} className={css.label}>
              Name
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.input}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.field}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
