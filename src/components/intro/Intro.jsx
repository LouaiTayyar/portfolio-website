import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor: false,
      strings:['Rupert','Cornelius!','Jack']})
  },[])


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
                <h2><span ref={textRef}></span></h2>
              </div>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""></img>
          </a>
        </div>
    </div>
  )
}
