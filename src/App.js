import React from 'react';
import './App.css';
import Example from './components/css transition/css.transition';
import Switch from './components/switch transition/switch.transition';
import TodoList from './components/todolist/todolist';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './components/card-spring/card.spring';
import Column from './components/column.spring/column.spring';

function App() {
  return (
    <div className="App">
      <Switch />
      <Example />
      <TodoList />
      <Card />
      <Column />
    </div>
  );
}

export default App;
