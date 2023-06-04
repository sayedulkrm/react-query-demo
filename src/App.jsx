import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";

const App = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    <button>All Users</button>
                </Link>
                <Link to="/add">
                    <button>Add Users</button>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<AllUsers />} />
                <Route path="/add" element={<AddUser />} />
            </Routes>
        </div>
    );
};

export default App;
