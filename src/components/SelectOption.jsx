import './SelectOption.css'

const SelectOption = () => {
    const onChangeSortType = () => { }

    return (
        <select onChange={onChangeSortType}>
            <option value={"latest"}>최신순</option>
            <option value={"high-price"}>가격 높은순</option>
            <option value={"low-price"}>가격 낮은순</option>
        </select>
    )
}

export default SelectOption