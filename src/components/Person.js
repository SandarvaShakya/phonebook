const Person = (props) => {
    return (
        <div className='flex container'>
            <p>{props.person.name}</p>
            <p>{props.person.number}</p>
        </div>
    )
}

export default Person;