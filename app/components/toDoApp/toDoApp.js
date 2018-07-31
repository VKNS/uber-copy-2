import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddTaskForm from './components/addTaskForm';
import DisplayBox from './components/displayBox';
import './styles/toDoApp.css';

import { jobIsDoneByClick } from './reducers/reducers';

const store = createStore(jobIsDoneByClick);

const ToDoApp = () => (
  <Provider store={store}>
    <section className="todoapp">
      <AddTaskForm />
      <DisplayBox />
    </section>
  </Provider>
);

export default ToDoApp;
