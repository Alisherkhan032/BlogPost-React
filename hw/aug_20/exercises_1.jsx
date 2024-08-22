/*

Exercise 1: Counter Component
Create a simple counter component that increments and decrements a count value when buttons are clicked.

Requirements:

Use useState to manage the count state.
Create two buttons: "Increment" and "Decrement".
Display the current count value.
Exercise 2: Toggle Visibility
Create a component that toggles the visibility of a text paragraph when a button is clicked.

Requirements:

Use useState to manage the visibility state.
Create a button that toggles the visibility.
Display a paragraph of text that is shown or hidden based on the state.
Exercise 3: Form Input Handling
Create a form with an input field and a submit button. Display the input value below the form when the form is submitted.

Requirements:

Use useState to manage the input value.
Handle the form submission to display the input value.
Prevent the default form submission behavior.
Exercise 4: Change Background Color
Create a component that changes the background color of a div when a button is clicked.

Requirements:

Use useState to manage the background color state.
Create a button that changes the background color to a random color.
Display a div with the current background color.
Exercise 5: Todo List
Create a simple todo list application where users can add and remove items.

Requirements:

Use useState to manage the list of todos.
Create an input field and a button to add new todos.
Display the list of todos with a button to remove each item.
Exercise 6: Toggle Dark Mode
Create a component that toggles between light and dark mode when a button is clicked.

Requirements:

Use useState to manage the theme state.
Create a button that toggles between light and dark mode.
Apply different styles for light and dark modes.
Exercise 7: Like Button
Create a component with a "Like" button that toggles between "Like" and "Unlike" states.

Requirements:

Use useState to manage the like state.
Create a button that toggles the text between "Like" and "Unlike".
Display the current state of the button.
Exercise 8: Show/Hide Password
Create a component with a password input field and a button to show/hide the password.

Requirements:

Use useState to manage the visibility state of the password.
Create a button that toggles the input type between "password" and "text".
Display the password input field with the current visibility state.
These exercises should help you practice using events and the useState hook in React.

*/


import React, { useState } from 'react';

// Exercise 1: Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Exercise 2: Toggle Visibility
const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>Toggle Visibility</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This is a paragraph of text.</p>}
    </div>
  );
};

// Exercise 3: Form Input Handling
const FormInputHandling = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <h2>Form Input Handling</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
};

// Exercise 4: Change Background Color
const ChangeBackgroundColor = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <h2>Change Background Color</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

// Exercise 5: Todo List
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exercise 6: Toggle Dark Mode
const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000', padding: '20px' }}>
      <h2>Toggle Dark Mode</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

// Exercise 7: Like Button
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h2>Like Button</h2>
      <button onClick={() => setLiked(!liked)}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

// Exercise 8: Show/Hide Password
const ShowHidePassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Show/Hide Password</h2>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Counter />
      <ToggleVisibility />
      <FormInputHandling />
      <ChangeBackgroundColor />
      <TodoList />
      <ToggleDarkMode />
      <LikeButton />
      <ShowHidePassword />
    </div>
  );
};

export default App;