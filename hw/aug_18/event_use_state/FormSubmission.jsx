import React, { useState } from 'react';

const FormSubmission = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <button type="submit">Submit</button>
            </form>
            {submitted && (
                <div>
                    <h2>Submitted Information</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            )}
        </div>
    );
};

export default FormSubmission;