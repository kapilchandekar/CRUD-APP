import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas/index";
import { updateUserData } from "../Redux/action";

const AddEditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const currentUser = location.state.currentUser;

  const initialValues = {
    FullName: currentUser.FullName,
    Dob: currentUser.Dob,
    Gender: currentUser.Gender,
    BioData: currentUser.BioData,
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location.state]);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      enableReinitialize: true,
      onSubmit: (values, action) => {
        dispatch(updateUserData({ _id, values }));
        navigate("/");
        console.log("singeluser", values);
        action.resetForm();
      },
    });
  console.log("errs", errors);

  return (
    <div className="container">
      <div className="form-container col-md-4 mt-md-5 mt-3 mx-md-auto">
        <div class="form-floating mb-3">
          <input
            name="FullName"
            type="text"
            class={`form-control ${
              errors.FullName && touched.FullName ? "border-danger" : ""
            }`}
            id="floatingInput"
            placeholder="name"
            value={values.FullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label for="floatingInput"> Full Name</label>
        </div>
        <div class="form-floating mb-3 ">
          <input
            name="Dob"
            type="date"
            class={`form-control ${
              errors.Dob && touched.Dob ? "border-danger" : ""
            }`}
            id="floatingInput"
            placeholder=""
            value={values.Dob}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label for="floatingInput">Dob</label>
        </div>
        <div class="form-floating mb-3 ">
          <select
            class={`form-select ${
              errors.Gender && touched.Gender ? "border-danger" : ""
            }`}
            name="Gender"
            value={values.Gender}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: "block" }}
          >
            <option value="" label="Select Gender">
              Select Gender{" "}
            </option>
            <option value="Female" label="Female">
              {" "}
              Female
            </option>
            <option value="Male" label="Male">
              Male
            </option>
          </select>
          <label for="floatingSelect">Gender</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            name="BioData"
            class={`form-control ${
              errors.BioData && touched.BioData ? "border-danger" : ""
            }`}
            placeholder="Biodata"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={values.BioData}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          <label for="floatingTextarea2">BioData</label>
        </div>
        <div class="col-12 text-center">
          <button class="btn btn-primary" type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditUser;
