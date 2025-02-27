import './Editor.css'
import Button from './Button'
import ContentHeader from './ContentHeader'
import { useNavigate } from 'react-router-dom'
import InputTypeText from './InputTypeText'
import { useRef, useState } from 'react'
import ImgItem from './ImgItem'

const TRANSACTION_METHOD_OPTIONS = ["직거래", "택배", "편의점 택배", "반값 택배"];

const Editor = ({ type, onSubmit }) => {
    const nav = useNavigate()
    const id = 1
    const [input, setInput] = useState({
        title: "",
        seller: "test",
        price: "",
        description: "",
        transactionMethod: [],
        imgUrl: [],
        createdAt: new Date().getTime()
    })

    const onChangeInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInput({
            ...input,
            [name]: value
        })
    }

    const [selectedFile, setSelectedFile] = useState([])

    const fileInputRef = useRef(null)
    const onClickPlusButton = () => {
        fileInputRef.current.click()
    }

    const onChangeFileInput = (e) => {
        const files = e.target.files;
        if (!files) return;

        setSelectedFile(prevFiles => [...prevFiles, ...files])
    }

    const onClickRemoveButton = (targetFile) => {
        setSelectedFile(prevFiles => prevFiles.filter(file => file !== targetFile));
    }

    return (
        <div className='Editor'>
            <ContentHeader
                title={`상품 ${type}하기`}
                leftChild={<Button text={"뒤로 가기"} onClick={() => nav(-1)} type={"pinkred"} />}
                rightChild={<Button text={`${type}하기`} onClick={() => nav(`/detail/${id}`)} type={"darkgreen"} />}
            />
            <div>
                {/* {title,
                    seller, <- 자동 저장
                    price,
                    description,
                    transactionMethod,
                    imgUrl,
                    createdAt
                    } */}
                <h3>기본 정보</h3>
                <InputTypeText onChangeInput={onChangeInput} value={input.title} text={'제목'} name={'title'} />
                <InputTypeText onChangeInput={onChangeInput} value={input.price} text={'가격'} name={'price'} type={'number'} />
                <div className='InputTypeText'>
                    <label>거래 방법</label>
                    <div className='checkboxOptionWrapper'>
                        {TRANSACTION_METHOD_OPTIONS.map((option, idx) => (
                            <label key={idx}>
                                <input
                                    type='checkbox'
                                    value={option}
                                    name="transactionMethod"
                                ></input>
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className='productImage'>
                <h3>상품 사진</h3>
                <input
                    ref={fileInputRef}
                    onChange={onChangeFileInput}
                    type="file" name="file" id="imageUpload" className="image-file-input" accept="image/*"
                    multiple required hidden />
                <div className='imagePreview'>
                    <div className='ImgItem'>
                        <button onClick={onClickPlusButton} className='plusButton'>+</button>
                    </div>
                    {selectedFile && selectedFile.map(
                        (file, id) => <ImgItem key={id} file={file} onClickRemoveButton={onClickRemoveButton} />
                    )}
                </div>
            </div>

            <div className='productDescription'>
                <h3>상품 설명</h3>
                <textarea
                    name="description"
                    value={input.description}
                    onChange={onChangeInput}
                    placeholder='상품에 대한 설명을 입력하세요.' />
            </div>

            <Button text={`${type}하기`} onClick={() => nav(`/detail/${id}`)} type={"darkgreen"} />
        </div>
    )
}

export default Editor