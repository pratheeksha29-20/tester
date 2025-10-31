import React,{useState} from 'react'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number,setNumber]= useState('');
  const handlesubmit =(e) =>
{
  e.preventDefault()
  {console.log(name)}
{console.log(age)}
{console.log(number)}

} 
 return (
    <div>
      <form onSubmit ={handlesubmit}>
        <input type="text" placeholder="Enter your name" value = { name}
            onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Enter your age" value = {age}
            onChange={(e) => setAge(e.target.value)}/>
        <input type ="number" placeholder="enter your number" value = {number}
            onChange={(e) => setNumber(e.target.value)}/>     
           <button type='submit'>submit</button>

      </form>
      <p>your name is</p>
       <p> your age is</p>
       <p> your number is</p>
       <span>
      
       </span>


    </div>
  )
}

export default App