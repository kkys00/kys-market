import './ContentHeader.css'

const ContentHeader = ({ title, leftChild, rightChild }) => {

    return (
        <div className='ContentHeader'>
            <div className='content_header_leftChild'>
                {leftChild}
            </div>
            <div className='content_title'><h2>{title}</h2></div>
            <div className='content_header_rightChild'>
                {rightChild}
            </div>
        </div>
    )
}

export default ContentHeader