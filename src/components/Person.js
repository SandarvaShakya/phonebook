const Person = (props) => {
    return (
        <div className='flex container'>
            <p>{props.person.name}</p>
            <p>{props.person.number}</p>
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