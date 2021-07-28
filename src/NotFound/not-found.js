import "./not-found.scss";
import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div className="error">
            <div className="title">404</div>
            <div className="desc">This page was not found. Go to
                {
                    <Link to="/Learning-English-React/login" className="link"> home!</Link>
                }
            </div>
        </div>
    );

}

export default NotFound;