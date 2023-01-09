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
          <div className="nameCard">
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
          <a href="#portfolio">
            <img src="assets/down.png" alt=""></img>
          </a>
        </div>
    </div>
  )
}
