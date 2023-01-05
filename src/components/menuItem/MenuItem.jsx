import "./menuItem.scss"

export default function MenuItem({sectionName,menuOpen,setMenuOpen}) {
  if (sectionName === "intro") {
    return (
      <li className="menuItem" onClick={()=>setMenuOpen(!menuOpen)}>
          <a href={"#" + (sectionName)}>Home</a> 
      </li>
    ) 
  }
  else{
    return (
      <li className="menuItem" onClick={()=>setMenuOpen(!menuOpen)}>
          <a href={"#" + (sectionName)}>{sectionName}</a> 
      </li>
    )
  }
}
