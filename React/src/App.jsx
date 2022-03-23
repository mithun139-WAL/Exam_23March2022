/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line object-curly-spacing
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AddProduct from './AddProducts';
import './App.css';
import Forums from './Forum';
import AddHobby from './Hobbies';
import TodoApp from './TodoServer';
import AddTweet from './Twitter';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            UserApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/todos" className="nav-item nav-link">
                Todos
              </Link>
              <Link to="/products" className="nav-item nav-link">
                Add Product
              </Link>
              <Link to="/forums" className="nav-item nav-link">
                Forums
              </Link>
              <Link to="/hobbies" className="nav-item nav-link">
                Hobbies
              </Link>
              <Link to="/tweets" className="nav-item nav-link">
                Tweets
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/todos" element={<TodoApp />}></Route>
          <Route path="/products" element={<AddProduct />}></Route>
          <Route path="/forums" element={<Forums />}></Route>
          <Route path="/hobbies" element={<AddHobby />}></Route>
          <Route path="/tweets" element={<AddTweet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
