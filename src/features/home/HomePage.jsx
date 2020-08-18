import React from 'react';
import "semantic-ui-css/semantic.min.css";
import {Link} from 'react-router-dom';



const HomePage = () => {
    return (
      <div className="App-home">
         
      <header className="App-header">
        <div className="App-title"><b><b>Events</b></b></div>
        <div className="App-under"><b><b>A place to meet</b></b></div>
        <div className="login-box">
         
          <Link to='/events' className="links"><button className="login-home-button"><b>enter</b></button></Link>
          
        </div>
      </header>
      <footer className="home-footer">
         @DevMountain Full Stack Group Project<br/><br></br>
        
         
             </footer>
      

      
    </div>
    )
}

export default HomePage