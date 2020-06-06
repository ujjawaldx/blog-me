import React from 'react';
import './App.css';
import medium_icon from './medium-icon.png'
import twitter_icon from './twitter-icon.png'
import linkedin_icon from './linkedin-icon.png'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Ujjawal Dixit</p>
                <p className="Small-font">Software Engineer @ GOJEK</p>
                <p className="Social-Links">
                    <a href="https://twitter.com/DixitUjjawal">
                        <img className="twitter-image" src={twitter_icon} alt={"twitter-icon"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/ujjawaldx/">
                        <img className="linkedin-image" src={linkedin_icon} alt={"linkedin-icon"}/>
                    </a>
                    <a href="https://medium.com/@ujjawaldixit099">
                        <img className="medium-image" src={medium_icon} alt={"facebook-icon"}/>
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
