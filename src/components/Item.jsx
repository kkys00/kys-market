import { useNavigate } from 'react-router-dom'
import './Item.css'

const Item = ({ id, imgUrl, title, seller, price, description, transactionMethod }) => {
    const nav = useNavigate()

    return (
        <div className="Item">
            <div
                onClick={() => nav(`/detail/${id}`)}
                className="itemImgWrapper">
                <img src={`/uploads/${imgUrl[0]}`} alt="상품 이미지" />
            </div>
            <div
                onClick={() => nav(`/detail/${id}`)}
                className="itemInfoWrapper">
                <div className="itemPrice">{price}원</div>
                <div className="itemProduct">{title}</div>
                <div className="itemSeller">판매자: {seller}</div>
            </div>
        </div>
    )
}

export default Item