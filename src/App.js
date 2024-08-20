import React from 'react'
import Header from './components/Header';
import TodoItem from './components/Todoitem';
import Button from './components/Button';
import './style.css';

const App = () => {
  return (
    <div className='todo-container'>
      <Header title='Toddie App'/>
      <TodoItem text='Eat'/>
      <TodoItem completed={true} text='Sleep'/>
      <TodoItem text='Code'/>
      <TodoItem text='Repeat'/>
      <Button />
    </div>
  );
};

export default App;