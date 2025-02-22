import './Button.css'

const Button = ({ text, type, onClick }) => {
    return (
        <button className={`Button button_${type}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button