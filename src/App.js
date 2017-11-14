import React, { Component } from "react";
import { addTodo } from "./actions";
import { connect } from "redux-zero/react";
import "./App.css";
addTodo();
const App = ({ todos, items }) => {
  console.log("todosss", todos);
  return (
    <div className="wrapper">
      <header>
        <p className="new"> EXOPLANETS</p> <br />
        <br />
        <br />
        <br />
      </header>
      <div className="main">
        <div id="invitedList">
          {todos.map((item, index) => {
            return (<div key={index}>
            {item.pl_name} fue descubierto en {item.pl_disc},   
            {item.pl_discmethod} fue el método por el cual fue descubierto.
             Tarda {item.pl_orbper} días en dar la vuelata a su orbita. 
             Se encuentra a {item.st_dist} parsecs de la tierra.
             <img src="https://78.media.tumblr.com/ca3a8def679f444366e531c03fb05fee/tumblr_inline_ohf2ki4nj41tzhl5u_500.gif"/>
            </div>);
          })}
        </div>
      </div>
    </div>
  );
};

const mapToProps = ({ todos, items }) => ({ todos, items });

export default connect(mapToProps)(App);
