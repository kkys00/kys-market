import { useContext } from "react"
import Editor from "../components/Editor"
import { ItemDispatchContext } from "../App"

const New = () => {
    const { onCreate } = useContext(ItemDispatchContext)
    const onSubmit = (input, imgUrl) => {
        onCreate(
            input.title,
            input.seller,
            input.price,
            input.description,
            input.transactionMethod,
            imgUrl,
            input.createdAt
        )
    }
    return (
        <div>
            <Editor type={'등록'} onSubmit={onSubmit} />
        </div>
    )
}

export default New