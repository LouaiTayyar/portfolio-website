import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Soap</li>
          <li>Marla</li>
          <li>Raymond </li>
          <li>Lu's Bar</li>
          <li>Project Mayhem</li>
        </ul>
        <div className="container">
          <div className="item">
            <img src="assets/soap.png" alt=""/>
          </div>
        </div>
    </div>
  )
}
