import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


 
const Loginpage = () => {
    let navigate =useNavigate();

    const [userName, setInput] = useState('');

    return (
        <div className='mainbackground'>
            <div className="main">
            <h1 className="login">User Login</h1>
            <form className="form1">
              <div>
              <div>
              <label className='label'>User Name</label>
              </div>
              <input className="userinput" type="text" placeholder="Type here" value={userName} onInput={e => setInput(e.target.value)}/>
              </div>

              <div>
              <div>
              <label className='label'>Password</label>
              </div>
              <input className="userinput" type="password" placeholder="Type here"/>
              </div>

              <div>
              <br/>
              <input className="submit" type="button" value="Login" onClick={() => navigate("/Homepage/"+userName)}></input>
              </div>

            </form>
        </div>
        </div>

        

      

        
    );
}

export default Loginpage;