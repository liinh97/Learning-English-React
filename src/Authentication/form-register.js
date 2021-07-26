import "./form-authentication.scss";
import { Link } from 'react-router-dom';

const Register = () => {

    return (

        <div className="form-register">
            <form action="" id="register">
                <div className="form-title">English For You</div>
                <div className="form-description">-- Hey, U can register now ? --</div>
                <input type="text" id="input-user_name" placeholder="Enter your user name" />
                <input type="text" id="input-user_password" placeholder="Enter your password"/>
                <button id="btn-register" type="submit">REGISTER</button>
                <Link to="/login" id="link-login">You have a account? login now</Link>
            </form>
        </div>

    );

}

export default Register;