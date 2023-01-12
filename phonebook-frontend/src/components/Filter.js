const Filter = (props) => {
    return (
        <div className="flex container form-element filter">
            <label>Search Person</label>
            <input 
                placeholder="EG: Siddhartha Shakya"
                onChange={props.onChange}
                value={props.filterValue}
            />
        </div>
    )
}

export default Filter