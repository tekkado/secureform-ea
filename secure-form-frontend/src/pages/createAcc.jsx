import React from "react";
import Form from "../components/Form.jsx";
import { Link } from "react-router-dom";

const createAccountFields = [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
    {
        name: "terms",
        label: "I agree to the terms and conditions",
        type: "checkbox",
        required: true,
    },
];

const handleCreateAccountSubmit = (formData) => {
    console.log("Create Account Form Data:", formData);
};

export default function CreateAccountPage() {
    return (
        <div className="bg-gray-100 h-screen">
            {/* <Navbar will be here /> */}

                    {/* Create Account Form Section */}
                    <Form
                        fields={createAccountFields}
                        submitLabel="Create Account"
                        onSubmit={handleCreateAccountSubmit}
                    />
                    <div className="mt-4 text-center">
                        Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
                    </div>
            {/* <Footer will be here/> */}
        </div>
    );
}
