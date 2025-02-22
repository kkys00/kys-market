import './ContentHeader.css'

const ContentHeader = ({ title, rightChild }) => {
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
            <div className='content_title'><h2>{title}</h2></div>
            <div className='content_header_rightChild'>
                {rightChild}
            </div>
        </div>
    )
}

export default ContentHeader