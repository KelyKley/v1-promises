import React, { Component } from 'react';
import { addTodo } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos }) => {
   return (
      <div className="wrapper">
         <header>
            <p className="new"> Exoplanet Explorer </p> 
               <button type="submit" name="submit" value="submit" onClick={addTodo}>
                  Buscar
               </button>
               <div>{addTodo}</div>
         </header>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);