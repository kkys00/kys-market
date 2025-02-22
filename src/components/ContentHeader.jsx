import './ContentHeader.css'
import Button from './Button'

const ContentHeader = ({ title, leftChild, rightChild }) => {
    //leftChild - option
    //rightChild - Button
    const onChangeSortType = () => { }

    return (
        <div className='ContentHeader'>
            <div className='content_header_leftChild'>
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"high-price"}>가격 높은순</option>
                    <option value={"low-price"}>가격 낮은순</option>
                </select>
            </div>
            <div className='content_title'><h2>중고거래</h2></div>
            <div className='content_header_rightChild'>
                <Button text={"상품 등록하기"} type={"darkgreen"} />
            </div>
        </div>
    )
}

export default ContentHeader