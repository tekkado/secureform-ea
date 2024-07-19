import { useState } from 'react';

const useForm = (initialValues) => {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        callback();
    };

    return {
        formData,
        handleChange,
        handleSubmit,
    };
};

export default useForm;