import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {UserDetail} from "./routes/UserDetail";
import {UserList} from "./routes/UserList";

function App() {

  return <>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="user/:userId" element={<UserDetail />} />
    </Routes>
  </>;
}

export default App;
