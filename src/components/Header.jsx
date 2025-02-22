import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ rightChildFirst, rightChildSecond }) => {
    return (
        <div className="Header">
            <div className="header_title">
                <Link to="/">
                    <h1>KYSMarket</h1>
                </Link>
            </div>
            <div className="header_search">
                <input placeholder="검색어를 입력하세요" />
            </div>
            <div className="header_rightChild">
                <div>로그인</div>
                <div>회원가입</div>
            </div>
        </div>
    )
}

export default Header