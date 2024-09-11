import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const {id,title,body} = post;
    const navigate = useNavigate();

    const handleDetails = ()=> {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h2>Post Id: {id}</h2>
            <p>Title: {title}</p>
            <p><small>Body: {body}</small></p>
            <button onClick={handleDetails}>Show More</button>
        </div>
    );
};

export default Post;