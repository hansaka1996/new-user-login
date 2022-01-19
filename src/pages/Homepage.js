import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Loginpage";


function Homepage() {
    const { userName } = useParams();
    let navigate = useNavigate();
    return (
        <div className="home">
            <h3>Welcome to Homepage {userName} !</h3>
            <br />
            <input className="logout" type="button" value="Logout" onClick={() => navigate("/")}></input>
        </div>
    );
}
export default Homepage;