import './Editor.css'
import Button from './Button'
import ContentHeader from './ContentHeader'
import { useNavigate } from 'react-router-dom'
import InputTypeText from './InputTypeText'
import { useRef, useState } from 'react'
import ImgItem from './ImgItem'

const Editor = ({ type }) => {
    const nav = useNavigate()
    const id = 1
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
                <h3>기본 정보</h3>
                <InputTypeText text={'상품이름'} name={'product'} />
                <InputTypeText text={'가격'} name={'price'} type={'number'} />
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
                <textarea placeholder='상품에 대한 설명을 입력하세요.' />
            </div>

            <Button text={`${type}하기`} onClick={() => nav(`/detail/${id}`)} type={"darkgreen"} />
        </div>
    )
}

export default Editor