import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([{ id: uuidv4(), text: "sample todo" }]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (newTodo.trim()) {
      // Check if newTodo is not empty
      setTodos([...todos, { id: uuidv4(), text: newTodo }]);
      setNewTodo(""); // Clear the input field after adding
    }
  };

  const updateTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
 
  const uppercase = () => {
    setTodos(todos.map((todo) => ({ ...todo, text: todo.text.toUpperCase() })));
  };
  // const uppercaseOne = (id) => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) {
  //       return { ...todo, text: todo.text.toUpperCase() };
  //     }
  //     return todo;
  //   }));
  // };

  return (
    <div className="container">
      <header>
        <h1>TaskTrek</h1>
      </header>

      <main>
        <section className="todo-section">
          <form className="todo-form" onSubmit={addTodo}>
            <input
              value={newTodo}
              type="text"
              placeholder="Add a new task..."
              onChange={updateTodo}
            />
            <button type="submit">Add</button>
          </form>

          <h3
            style={{
              textAlign: "center",
              backgroundColor: "SlateBlue",
              height: "40px",
              fontSize: "30px",
              color: "white",
              margin: "10px 0",
            }}
          >
            Task List
          </h3>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index}>
                <input type="checkbox" id="task1"></input>
                <label style={{ fontSize: "25px" }} htmlFor="task1">
                  {todo.text}
                </label>
                <button  onClick={() => deleteTodo(todo.id)} class="delete-btn">delete</button>
                {/* <button onClick={() => uppercaseOne(todo.id)}  className="update">Uppercase</button> */}
              
              </li>
            ))}
          </ul>
          <button onClick={uppercase} style={{ backgroundColor: "black", color: "white" }}>
            Uppercase All
          </button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 TaskTrek</p>
      </footer>
    </div>
  );
}

export default App;
