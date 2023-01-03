import "./topbar.scss"
import {Person,Email} from '@mui/icons-material/';

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
        <div className="wrapper">
          <div className="left">
              <a href="#intro" className="logo">genius.</a>
              <div className="itemContainer">
                  <Person className="icon"/>
                  <span>+3098765432</span>
              </div>
              <div className="itemContainer">
                  <Email className="icon"/>
                  <span>mail@domain.com</span>
              </div>
          </div>
          <div className="right">
              This is right
          </div>
        </div>
    </div>
  )
}
