import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {


    

    const users =  useLoaderData();
    return (
        <div>
            <h1>Our Users: {users.length}</h1>
            <ul>
                <li>Tazri Ullah Buiyan</li>
                <li>Mehedi patowary loccha </li>
                <li>Sharif bara bokachoka</li>
                <li>Hridoy / chodon kesto</li>
            </ul>
            <div className="user-container">
                {
                    users.map(user => <User user={user} key={user.name}></User>)
                }
            </div>
        </div>
    );
};

export default Users;