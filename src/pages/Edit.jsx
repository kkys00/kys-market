import { useParams } from "react-router-dom"
import Editor from "../components/Editor"
import { useContext } from "react"
import { ItemDispatchContext, ItemStateContext } from "../App"

const Edit = () => {
    const { id } = useParams()
    const item = useContext(ItemStateContext)[id]
    const { onUpdate } = useContext(ItemDispatchContext)

    const onSubmit = (input) => {
        onUpdate(
            id,
            input.title,
            input.seller,
            input.price,
            input.description,
            input.transactionMethod,
            input.imgUrl,
            input.createdAt
        )
    }

    return (
        <div>
            <Editor type={'수정'} initData={item} onSubmit={onSubmit} />
        </div>
    )
}

export default Edit