import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Book from "./screens/Book";
import MyBooks from "./screens/MyBooks";
import AddBook from "./screens/AddBook";
function App() {
  return (
    <Router>
    <div>
      <header>
        <Navbar />
      </header>
      <main>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book/:slug" element={<Book/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/mybooks" element={<MyBooks/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        
        </Routes>
        </div>
      </main>
      <footer>

      </footer>
    </div>
    </Router>
  );
}

export default App;
