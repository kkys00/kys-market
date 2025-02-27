import './InputTypeText.css'

const InputTypeText = ({ onChangeInput, name, text, type, value }) => {
    return (
        <div className='InputTypeText'>
            <label htmlFor={name}>{text}</label>
            <input
                onChange={onChangeInput}
                value={value}
                type={type ? type : 'text'}
                id={name}
                name={name}
                placeholder='입력' />
        </div>
    )
}

export default InputTypeText