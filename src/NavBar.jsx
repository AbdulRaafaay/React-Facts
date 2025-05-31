import "./NavBar.css"

export default function Header() {
  return (
    <header>
      <nav className='navbar'>
        <img src='/src/images/react-logo.png' className='reactLogo' />
        <span className="text">ReactFacts</span>
      </nav>
    </header>
  )
}
