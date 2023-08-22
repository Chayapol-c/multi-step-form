import { FormInput } from "./FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FooterMenu } from "./FooterMenu";
import { FormLayout } from "./FormLayout";
import { currentStepAtom } from "../atom";
import { useAtom } from "jotai";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const PersonalInfoSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid Email").required("This field is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("This field is required"),
});

function PersonalInfoStep() {
  const [, setCurrentStep] = useAtom(currentStepAtom);
  const { values, touched, handleSubmit, handleChange, handleBlur, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      onSubmit: () => {
        setCurrentStep(2);
      },
      validationSchema: PersonalInfoSchema,
    });

  return (
    <>
      <FormLayout
        title="personal info"
        description="Please provide your name, email address, and phone number."
        onSubmit={handleSubmit}
      >
        <FormInput
          label="name"
          fieldName="name"
          modelValue={values.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="text"
          placeholder="e.g. Stephen King"
          errorMessage={errors.name && touched.name ? errors.email : ""}
        />
        <FormInput
          label="email address"
          fieldName="email"
          modelValue={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          errorMessage={errors.email && touched.email ? errors.email : ""}
        />
        <FormInput
          label="phone number"
          fieldName="phoneNumber"
          modelValue={values.phoneNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          errorMessage={
            errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ""
          }
        />
        <FooterMenu primaryBtnMessage="Next Step" />
      </FormLayout>
    </>
  );
}

export { PersonalInfoStep };
