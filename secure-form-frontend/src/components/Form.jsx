import React from "react";
import useForm from "../hooks/useForm.js";

export default function Form({fields, submitLabel, onSubmit}) {
    const initialValues = fields.reduce((acc, field) => {
        acc[field.name] = field.type === "checkbox" ? false : "";
        return acc;
    }, {});

    const { formData, handleChange, handleSubmit } = useForm(initialValues);

    const submitForm = () => {
        onSubmit(formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
                onSubmit={handleSubmit(submitForm)}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">{submitLabel}</h2>
                {fields.map((field) => (
                    <div className="mb-4" key={field.name}>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor={field.name}
                        >
                            {field.label}
                        </label>
                        {field.type === "checkbox" ? (
                            <input
                                className="mr-2 leading-tight"
                                id={field.name}
                                type="checkbox"
                                name={field.name}
                                checked={formData[field.name]}
                                onChange={handleChange}
                                required={field.required}
                            />
                        ) : (
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={field.name}
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required={field.required}
                            />
                        )}
                    </div>
                ))}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        {submitLabel}
                    </button>
                </div>
            </form>
        </div>
    );
}
