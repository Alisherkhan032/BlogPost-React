import React, { useState } from 'react';

const ToggleVisibility = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Text
            </button>
            {isVisible && <p>This is a toggled paragraph.</p>}
        </div>
    );
};

export default ToggleVisibility;
