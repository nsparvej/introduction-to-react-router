import { useLoaderData, useNavigate } from "react-router-dom";
import './post.css';

const PostDetails = () => {
    const post = useLoaderData();
    const {title,id, body} = post;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(- 1)
    }
    return (
        <div className="details">
            <h1>{id}</h1>
            <h4>Post Details about : {title} </h4>
            <p>{body}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;