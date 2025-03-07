import './Editor.css'
import Button from './Button'
import ContentHeader from './ContentHeader'
import { useNavigate } from 'react-router-dom'
import InputTypeText from './InputTypeText'
import { useEffect, useRef, useState } from 'react'
import ImgItem from './ImgItem'

const TRANSACTION_METHOD_OPTIONS = ["직거래", "택배", "편의점 택배", "반값 택배"];

const Editor = ({ type, onSubmit, initData }) => {
    const nav = useNavigate()
    const [input, setInput] = useState({
        title: "",
        seller: "test",
        price: "",
        description: "",
        transactionMethod: [],
        imgUrl: [],
        createdAt: new Date().getTime()
    })

    useEffect(() => {
        if (initData) {
            setInput({ ...initData })
        }
    }, [initData])

    const onChangeInput = (e) => {
        const { name, value } = e.target

        setInput({
            ...input,
            [name]: value
        })
    }

    const onChangeCheckbox = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setInput({
                ...input,
                transactionMethod: [...input.transactionMethod, value]
            })
        }
        else {
            input.transactionMethod.filter((item) => item !== value)
            setInput({
                ...input,
                transactionMethod: input.transactionMethod.filter((item) => item !== value)
            })
        }

    }

    const fileInputRef = useRef(null)

    const onClickPlusButton = () => {
        fileInputRef.current.click()
    }

    const onChangeFileInput = (e) => {
        const files = e.target.files;
        if (!files) return;
        console.log(files)
        // const urls = [...files].map(file => URL.createObjectURL(file))
        const urls = [...files].map(file => file.name)

        setInput({
            ...input,
            imgUrl: [...input.imgUrl, ...urls]
        })
    }

    const onClickRemoveButton = (targetFile) => {
        setInput({
            ...input,
            imgUrl: input.imgUrl.filter((item) => item !== targetFile)
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input)
    }

    const onReset = () => {
        setInput({
            title: "",
            seller: "test",
            price: "",
            description: "",
            transactionMethod: [],
            imgUrl: [],
            createdAt: input.createdAt
        })
    }

    const onRevoke = () => {
        if (window.confirm("변경 사항을 되돌릴까요?")) {
            setInput({
                ...initData
            })
        }
    }

    const createRightChildBtn = (type) => {
        switch (type) {
            case "등록": return <Button text={`리셋하기`} onClick={onReset} type={"pinkred"} />
            case "수정": return <Button text={`되돌리기`} onClick={onRevoke} type={"pinkred"} />
        }
    }

    return (
        <div className='Editor'>
            <ContentHeader
                title={`상품 ${type}하기`}
                leftChild={<Button text={"뒤로 가기"} onClick={() => nav(-1)} type={"darkgreen"} />}
                rightChild={createRightChildBtn(type)}
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
                                    onChange={onChangeCheckbox}
                                    type='checkbox'
                                    value={option}
                                    name="transactionMethod"
                                    checked={input.transactionMethod.includes(option)}
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
                    {input.imgUrl && input.imgUrl.map(
                        (file, id) => <ImgItem key={id} fileUrl={file} onClickRemoveButton={onClickRemoveButton} />
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

            <Button text={`${type}하기`} onClick={onClickSubmitButton} type={"darkgreen"} />
        </div>
    )
}

export default Editor