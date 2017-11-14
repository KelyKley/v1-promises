import React, { Component } from 'react';
import { addTodo , removeTodo } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos }) => {
   const Comment = todos.map(todo => <div className="comment">
         <li key={todo.id}>
            <img className="img-avatar" src="https://secure.gravatar.com/avatar/4468dc867fa42b5b18411c53336eb80c?s=160&d=retro&r=pg"/>
            <span className="userName">{todo.user}</span>
            <button type="submit" name="submit" value="submit" onClick={removeTodo}>Delete</button>
         </li>
         <li>{todo.text}</li>
      </div>);

   const onSubmit = e => {
      e.preventDefault();
      addTodo(this.comment.value, this.user.value);      
   };

   return (
      <div className="wrapper">
         <header>
            <p className="new"> Exoplanet Explorer </p> 
            <form onSubmit={onSubmit}>
            <input
                  type="text"
                  name="name"
                  placeholder="User"
                  ref={e => (this.user = e)}
               />
               <input
                  type="text"
                  name="name"
                  placeholder="Comment"
                  ref={e => (this.comment = e)}
               />
               <button type="submit" name="submit" value="submit">
                  POST COMMENT
               </button>
            </form>
         </header>
         <div className="main">
            <h2>Comments {todos.length}</h2>
            <ul id="invitedList">{Comment}</ul>
         </div>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);