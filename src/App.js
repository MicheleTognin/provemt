import React from 'react';
import './App.css';
import Example from './components/CssTransition/CssTransitionComponent';
import SwitchComponent from './components/SwitchTransition/SwitchTransitionComponent';
import TodoList from './components/ToDoList/ToDoListComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './components/CardSpring/CardSpringComponent';
import Column from './components/ColumnSpring/ColumnSpringComponent';

function App() {
  return (
    <div className="App">
      <SwitchComponent />
      <Example />
      <TodoList />
      <Card />
      <Column />
    </div>
  );
}

export default App;
