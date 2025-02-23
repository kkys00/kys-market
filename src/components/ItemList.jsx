import Item from './Item'
import './ItemList.css'

const mockDataGenerator = () => {
    const mockData = []
    for (let i = 1; i < 12; i++) {
        const formattedNum = i.toString().padStart(3, "0");
        const obj = {
            id: formattedNum,
            imgSrc: `${formattedNum}.jpg`,
            seller: `seller${formattedNum}`,
            product: `product${formattedNum}`,
            price: 12000
        }
        mockData.push(obj)
    }
    return mockData
}

const ItemList = () => {
    const mockData = mockDataGenerator()
    return (
        <div className='ItemList'>
            {mockData.map((item) => <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList