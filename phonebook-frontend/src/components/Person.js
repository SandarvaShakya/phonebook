const Person = (props) => {
    return (
        <div className='flex container'>
            <p className='flex-item'>{props.person.name}</p>
            <p className='flex-item'>{props.person.number}</p>
            <button 
                className="btn btn--delete"
                onClick={props.onClick}
            >
                Delete
            </button>
        </div>
    )
}

export default Person;