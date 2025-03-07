import { useContext, useRef } from "react"
import Editor from "../components/Editor"
import { ItemDispatchContext } from "../App"

const New = () => {
    const idRef = useRef(12345686)
    const { onCreate } = useContext(ItemDispatchContext)
    const onSubmit = (input) => {
        onCreate(
            idRef.current++,
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
            <Editor type={'등록'} onSubmit={onSubmit} />
        </div>
    )
}

export default New