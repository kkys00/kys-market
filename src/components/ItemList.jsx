import Item from './Item'
import './ItemList.css'

const ItemList = ({ data }) => {
    const itemArray = Object.entries(data)
    return (
        <div className='ItemList'>
            {itemArray.map(([id, item]) => <Item key={id} id={id} {...item} />)}
        </div>
    )
}

export default ItemList