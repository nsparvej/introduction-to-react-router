import { Link } from 'react-router-dom';
import '../Header/Header.css'

const User = ({user}) => {

    const {id,name,email,phone} = user;
    return (
        <div className='user'>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{phone}</h4>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;