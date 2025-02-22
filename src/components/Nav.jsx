import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='Nav'>
            <ul className="nav-list">
                <li><Link to="/season">시즌</Link></li>
                <li><Link to="/market">중고거래</Link></li>
                <li><Link to="/groupbuy">공동구매</Link></li>
                <li><Link to="/brand">동문브랜드</Link></li>
            </ul>
        </nav>
    )
}

export default Nav