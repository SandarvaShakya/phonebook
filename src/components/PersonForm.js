import '../App.css'

const PersonForm = (props) => {
    return (
        <div className='form container'>
            <form onSubmit={props.onSubmit}>
                <div className=' flex form-element'>
                    <label>Name</label>
                    <input 
                        placeholder='EG: Siddhartha Shakya'
                        onChange={props.onNameChange}
                        value={props.nameValue}
                        required
                    />
                </div>
                <div className=' flex form-element'>
                    <label>Number</label>
                    <input 
                        placeholder='EG: 9861234590'
                        onChange={props.onNumberChange}
                        value={props.numberValue}
                        required
                    />
                </div>
                <div className=" flex form-element">
                    <button 
                        type='submit' 
                        className='btn'
                    >ADD
                    </button>
                    </div>
            </form>
        </div>
    )
}

export default PersonForm