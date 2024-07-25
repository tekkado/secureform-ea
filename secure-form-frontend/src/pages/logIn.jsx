import React from 'react';
import Form from "../components/Form.jsx";
import { Link } from "react-router-dom";

const logInFields = [
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true }
];

const handleLogInSubmit = (formData) => {
  console.log("Login details:", formData);
};

export default function logIn() {
  return (
    <div className="bg-gray-100 h-screen">
      {/* <Navbar will be here /> */}

      {/* Log In Form Section */}
      <Form
        fields={logInFields}
        submitLabel="Log In"
        onSubmit={handleLogInSubmit}
      />
      <div className="mt-4 text-center">
        Don't have an account? <Link to="/" className="text-blue-500">Create an Account</Link>
      </div>

      {/* <Footer will be here/> */}
    </div>
  );
}