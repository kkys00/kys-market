import ContentHeader from "../components/ContentHeader"
import Button from '../components/Button'
import SelectOption from '../components/SelectOption'
import ItemList from "../components/ItemList"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { ItemStateContext } from "../App"

const Market = () => {
    const nav = useNavigate()
    const data = useContext(ItemStateContext)

    const [sortType, setSortType] = useState("latest")
    const onChangeSortType = (value) => {
        setSortType(value)
    }

    return (
        <div>
            <ContentHeader
                title={"중고거래"}
                leftChild={<SelectOption onChangeSortType={onChangeSortType} />}
                rightChild={
                    <Button
                        onClick={() => nav('/new')}
                        text={"상품 등록하기"}
                        type={"darkgreen"} />} />
            <ItemList data={data} />
        </div>
    )
}

export default Market