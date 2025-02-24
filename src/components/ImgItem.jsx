import './ImgItem.css'

const ImgItem = ({ file, onClickRemoveButton }) => {
    return (
        <div className="ImgItem">
            <button onClick={() => onClickRemoveButton(file)} className="removeButton">x</button>
            <img src={URL.createObjectURL(file)} alt={file.name} />
            <div className="fileName">{file.name}</div>
        </div>
    );
};

export default ImgItem;
