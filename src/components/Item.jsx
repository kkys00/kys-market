import './Item.css'

const Item = ({ id, imgSrc, seller, product, price }) => {
    return (
        <div className="Item">
            <div className="itemImgWrapper">
                <img src={`/uploads/${imgSrc}`} alt="상품 이미지" />
            </div>
            <div className="itemInfoWrapper">
                <div className="itemPrice">{price}원</div>
                <div className="itemProduct">{product}</div>
                <div className="itemSeller">판매자: {seller}</div>
            </div>
        </div>
    )
}

export default Item