import React from 'react';
import './App.css';
import Example from './components/css transition/css.transition';
import Switch from './components/switch transition/switch.transition';
import TodoList from './components/todolist/todolist';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch />
      <Example />
      <TodoList />
    </div>
  );
}

export default App;
