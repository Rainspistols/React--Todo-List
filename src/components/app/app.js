import React from 'react';
import AppHeader from './app-header/app-header';
import TodoList from '../todo-list/todo-list';
import './app.css';
import SearchAndFilter from '../../layout/search-and-filter';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className='app'>
      <AppHeader toDo='1' done='3' />
      <SearchAndFilter />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
