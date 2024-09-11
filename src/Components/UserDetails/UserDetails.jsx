import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name,id,email} = user;
    return (
        <div>
            <h1>this is user details </h1>
            <h3>{name}</h3>
            <h3>{id}</h3>
            <h3>{email}</h3>

        </div>
    );
};

export default UserDetails;