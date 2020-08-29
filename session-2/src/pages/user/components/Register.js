import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../action";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [generateId, setId] = React.useState(1);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const RegisterSchemaValidation = Yup.object().shape({
    fullname: Yup.string()
      .min(5, "fullname Too Short!")
      .max(50, "fullname Too Long!")
      .required("fullname is required"),
    email: Yup.string().email("email not valid").required("email is required"),
    password: Yup.string()
      .min(5, "password min 5 caracter")
      .required("password is required"),
    phoneNumber: Yup.string()
    .min(12,'Phone Number to short')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Phone Number is required"),
  });
  const formRegister = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      phoneNumber: ""
    },
    validationSchema: RegisterSchemaValidation,
        onSubmit: (values ,{resetForm}) => {
            setId(generateId + 1);
            const value = {
                id:generateId,
                fullname:values.fullname, 
                email:values.email, 
                password:values.password, 
                telepon:values.telepon
            }
            dispatch(register(value))
            resetForm({values:''});
        },
  });
  return (
    <form onSubmit={formRegister.handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          padding: 20
        }}
      >
        <input
          type="fullname"
          name="fullname"
          placeholder="Full Name"
          onChange={formRegister.handleChange}
          value={formRegister.values.fullname}
          style={{ marginBottom: 20 }}
        />
        {formRegister.touched.fullname && formRegister.errors.fullname && (
          <p style={{ color: "red" }}>{formRegister.errors.fullname}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formRegister.handleChange}
          value={formRegister.values.email}
          style={{ marginBottom: 20 }}
        />
        {formRegister.errors.email && (
          <p style={{ color: "red" }}>{formRegister.errors.email}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formRegister.handleChange}
          value={formRegister.values.password}
          style={{ marginBottom: 20 }}
        />
        {formRegister.errors.password && (
          <p style={{ color: "red" }}>{formRegister.errors.password}</p>
        )}
        <input
          type="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={formRegister.handleChange}
          value={formRegister.values.phoneNumber}
          style={{ marginBottom: 20 }}
        />
        {formRegister.touched.phoneNumber && formRegister.errors.phoneNumber && (
          <p style={{ color: "red" }}>{formRegister.errors.phoneNumber}</p>
        )}
      </div>
      <button type="submit">Register</button>
      <br />
    </form>
  );
};

export default Register;