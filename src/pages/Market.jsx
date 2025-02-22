import ContentHeader from "../components/ContentHeader"
import Button from '../components/Button'
import ItemList from "../components/ItemList"

const Market = () => {
    return (
        <div>
            <ContentHeader
                title={"중고거래"}
                rightChild={<Button text={"상품 등록하기"} type={"darkgreen"} />} />
            <ItemList />
        </div>
    )
}

export default Market