import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button'
import './ItemDetail.css'
import { ShoppingCart, Bookmark } from 'lucide-react';
import { useContext } from 'react';
import { ItemDispatchContext } from '../App';

const ItemDetail = ({ item }) => {
    const nav = useNavigate()
    const { onDelete } = useContext(ItemDispatchContext)
    const { id } = useParams()
    const {
        title,
        seller,
        price,
        description,
        transactionMethod,
        imgUrl,
    } = item
    const [mainImg, ...additionalImg] = imgUrl

    const onClickDelete = () => {
        if (window.confirm("게시글을 정말 삭제할까요? 다시 복구되지 않습니다.")) {
            onDelete(id)
        }
    }

    return (
        <div className='ItemDetail'>
            <div className='imageWrapper'>
                <div className='additionalImage'>
                    {additionalImg.map(item => <img key={item} src={`/uploads/${item}`} />)}
                </div>
                <div className='mainImage'>
                    <img src={`/uploads/${mainImg}`} alt="상품 이미지" />
                </div>
            </div>
            <div className='infoWrapper'>
                <div className='topInfo'>
                    <div className='bar'></div>
                    <div className='wordWrapper'>
                        <h4>{title}</h4>
                        <h4>{price}</h4>
                    </div>
                    <Button text={"수정하기"} type={"darkgreen"} onClick={() => nav(`/edit/${id}`)} />
                    <Button text={"삭제하기"} type={"pinkred"} onClick={onClickDelete} />
                </div>
                <div className='subInfo'>
                    <div className='dataName'>판매자</div> <div className='bar'></div> <div className='data'>{seller}</div>
                    <div className='dataName'>거래방법</div> <div className='bar'></div> <div className='data'>{transactionMethod.join(", ")}</div>
                    <div className='dataName'>상품설명</div> <div className='bar'></div> <div className='data'>{description}</div>
                </div>
                <div className='buttons'>
                    <Button text={
                        <>
                            <Bookmark size={18} color='white' /> 관심
                        </>

                    } type={"darkgreen"} />
                    <Button text={
                        <>
                            <ShoppingCart size={18} color="white" /> 바로 구매
                        </>
                    } type={"darkgreen"} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail