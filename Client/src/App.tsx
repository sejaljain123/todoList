import React from 'react';
import './App.css';
import Register from './Components/Forms/Register';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './Components/Forms/SignIn';
import Todo from './Components/Todo/Todo';
import UpdateTodo from './Components/Todo/UpdateTodo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
        <Route exact path="/todo/:id">
          <UpdateTodo />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
