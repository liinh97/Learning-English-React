import "./form-authentication.scss";
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    let messError = "message_error";

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("https://myproject-bd2e6-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
        .then((res) => res.json())
        .then((resJson) => {
            const users = Object.values(resJson);
            const user = users.find(
                item => item.username == username && item.password == password
            );
            user ? history.push("/area") : messError = "message_error hide_mess";
        });

        console.log(messError = "message_error hide_mess");
    }

    return (

        <div className="form-login">
            <form onSubmit={(e) => handleLogin(e)} id="login">
                <div className="form-title">English For You</div>
                <div className="form-description">-- Hey, U can login now ? --</div>
                <input 
                    type="text"
                    id="input-user_name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your user name" />
                <input
                    type="text" 
                    id="input-user_password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"/>
                <div className={messError}>Please check again account your's</div>
                <button id="btn-login" type="submit">LOGIN</button>
                <Link to="/register" id="link-register">You don't have a account?</Link>
            </form>
        </div>

    );

}

export default Login;