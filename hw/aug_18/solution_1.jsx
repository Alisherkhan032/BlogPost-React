import React, { useState } from 'react';

// Exercise 1: Button Click Event
const ButtonClick = () => {
    const [text, setText] = useState('Hello, World!');

    const handleClick = () => {
        setText('Button Clicked!');
    };

    return (
        <div>
            <h2>Exercise 1: Button Click Event</h2>
            <p>{text}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

// Exercise 2: Input Change Event
const InputChange = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h2>Exercise 2: Input Change Event</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
};

// Exercise 3: Form Submission Event
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
            <h2>Exercise 3: Form Submission Event</h2>
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
                    <h3>Submitted Information</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            )}
        </div>
    );
};

// Exercise 4: Mouse Over Event
const MouseOver = () => {
    const [bgColor, setBgColor] = useState('white');

    const handleMouseOver = () => {
        setBgColor('lightblue');
    };

    const handleMouseOut = () => {
        setBgColor('white');
    };

    return (
        <div>
            <h2>Exercise 4: Mouse Over Event</h2>
            <div
                style={{ backgroundColor: bgColor, padding: '20px', border: '1px solid black' }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Hover over me!
            </div>
        </div>
    );
};

// Exercise 5: Toggle Event
const ToggleVisibility = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h2>Exercise 5: Toggle Event</h2>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Text
            </button>
            {isVisible && <p>This is a toggled paragraph.</p>}
        </div>
    );
};

// Main Component to render all exercises
const App = () => {
    return (
        <div>
            <h1>React Event Handling Exercises</h1>
            <ButtonClick />
            <InputChange />
            <FormSubmission />
            <MouseOver />
            <ToggleVisibility />
        </div>
    );
};

export default App;