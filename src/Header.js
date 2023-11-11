import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div class="header">
        <Link to="/" class="white">Desiree Villasmil </Link> |
        <Link to="/about" class="white"> About </Link> | 
        <Link to="/journal" class="white"> Journal </Link> | 
        <Link to="/contact" class="white"> Contact </Link>
        
      <div>
    </div></div></header>
  )
}

export default Header