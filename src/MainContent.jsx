import "./maincontent.css"

export default function MainContent() {
  return (
    <main className="maincontent">
        <h1 className="heading1">Fun facts about React</h1>
        <ul className="list">
            <li className="points">Was first released in 2013</li>
            <li className="points">Was originally created by Jordan Walke</li>
            <li className="points">Has well over 200K stars on GitHub</li>
            <li className="points">Is maintained by Meta</li>
            <li className="points">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
  )
}