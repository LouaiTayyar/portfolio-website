import "./menu.scss"
import  MenuItem from "../menuItem/MenuItem"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <MenuItem sectionName={"intro"} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MenuItem sectionName={"portfolio"} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MenuItem sectionName={"works"} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MenuItem sectionName={"testimonials"} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MenuItem sectionName={"contact"} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </ul>
    </div>
  )
}
