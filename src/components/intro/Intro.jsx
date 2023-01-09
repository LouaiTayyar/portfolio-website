import "./intro.scss"
import Typewriter from 'typewriter-effect';


export default function Intro() {
  return (
    <div className="intro" id="intro"> 
        <div className="left">
          <div className="imgContainer">
              <img src="assets/tylerhd.png" alt=""></img>
          </div>
        </div>
        <div className="right">
        <p className="youare">YOU ARE </p>
          <div className="nameTag">
              <h1>HELLO</h1>
              <h3>my name is</h3>
              <div className="name">
                <h2><Typewriter
                      options={{
                        strings: ['Rupert', 'Cornelius','Lenny','Travis','Jack'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                </h2>
                
              </div>
          </div>
          <p className="quote">YOUR JOB</p>
          <p className="quote">HOW MUCH MONEY YOU HAVE IN THE BANK </p>
          <p className="quote">THE CAR YOU DRIVE</p>
          <p className="quote">THE CONTENTS OF YOUR WALLET</p>
          <p className="quote">YOUR F*&#!NG KHAKIS</p>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""></img>
          </a>
        </div>
    </div>
  )
}
