import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();


    return (
        <div>
            <h1>Oops</h1>
            <p><small>{error.statusText || error.message}</small></p>
            {
                error.status === 404 && <div> page not found <br/>
                <Link to="/"><button>Go Home</button></Link> </div>
            }
        </div>
    );
};

export default ErrorPage;