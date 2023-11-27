import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../auth/authSlice";
import LoginForm from "../auth/LoginForm";

export const AdminPage = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.username}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <LoginForm />
            )}
        </div>
    );
}