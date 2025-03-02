import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ItemStateContext } from "../App"
import ContentHeader from "../components/ContentHeader"
import Button from "../components/Button"
import ItemDetail from "../components/ItemDetail"

const Detail = () => {
    const nav = useNavigate()
    const { id } = useParams()
    const item = useContext(ItemStateContext)[id]

    return (
        <div> {id} Detail
            <ContentHeader
                title={"중고거래"}
                leftChild={
                    <Button
                        onClick={() => nav(-1)}
                        text={"뒤로 가기"}
                        type={"pinkred"} />
                }
                rightChild={
                    <Button
                        text={"리뷰 작성하기"}
                        type={"mintgreen"} />
                } />
            <ItemDetail item={item} />
        </div>
    )
}

export default Detail