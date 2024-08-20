import React from 'react'
import Header from './components/Header';
import TodoItem from './components/Todoitem';
import Button from './components/Button';
import './style.css';

const App = () => {
  return (
    <div className='todo-container'>
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Button />
    </div>
  );
};

export default App;