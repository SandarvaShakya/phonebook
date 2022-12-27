import personsService from './services/persons'
import './App.css'
import { useEffect, useState } from 'react'

import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
        setFilteredPersons(initialData)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    if(!event.target.value){
      return setFilteredPersons(persons)
    }
    const filterList = persons.filter(
      person => person.name.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredPersons(filterList)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const samePerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if(samePerson){
      const confirm = window.confirm(`${samePerson.name} already exists do you want to update the number?`)
      if(confirm){
        personsService
        .update(samePerson.id, samePerson, newNumber)
        .then(returnedValue => {
          console.log(returnedValue);
          setNewName('')
          setNewNumber('')
          setPersons(persons.map(person => person.id !== samePerson.id ? person : returnedValue))
          setFilteredPersons(persons.map(person => person.id !== samePerson.id ? person : returnedValue))
        })
      }
    }else{
      const newObject = {
        name: newName,
        number: newNumber
      }
      personsService
      .create(newObject)
      .then(returnedData => {
        setPersons(persons.concat(returnedData))
        setFilteredPersons(filteredPersons.concat(returnedData))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    const confirm = window.confirm(`Confirm delete ${person.name}`);
    if(id && confirm){
      personsService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setFilteredPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <Filter 
        onChange={handleFilterChange}
        filterValue={filter}
      />
      <h1>Add Number</h1>
      <PersonForm 
        onSubmit={addPerson}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        nameValue={newName}
        numberValue={newNumber}
      />
      <h2>Person Details</h2>
      {filteredPersons.map(person => 
        <Person 
          key={person.id} 
          person={person}
          onClick={() => deletePerson(person.id)}
        />)
      }
    </div>
  )
}

export default App;