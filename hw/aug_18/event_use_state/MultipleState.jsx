import React, { useState } from 'react';

const MultipleState = () => {
    const [name, setName] = useState('Pratham');
    const [age, setAge] = useState(25);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
            <input type="number" value={age} onChange={handleAgeChange} placeholder="Age" />
            <p>My name is {name} and my age is {age}</p>
        </div>
    );
};

export default MultipleState;