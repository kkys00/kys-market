import './ImgItem.css'

const ImgItem = ({ fileUrl, onClickRemoveButton }) => {
    return (
        <div className="ImgItem">
            <button onClick={() => onClickRemoveButton(fileUrl)} className="removeButton">x</button>
            <img src={`/uploads/${fileUrl}`} alt={fileUrl} />
            <div className="fileName">{fileUrl}</div>
        </div>
    );
};

export default ImgItem;
