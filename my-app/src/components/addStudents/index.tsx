import {useState} from 'react'

interface User {
  id: number;
  name: string;
  email: string;
  gpa: number;
}

interface AddStudentsProps {
  students: User[];
  setStudents: React.Dispatch<React.SetStateAction<User[]>>;
}

function AddStudents({ students, setStudents }: AddStudentsProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gpa, setGpa] = useState<number | ''>('');

  const addUser = () => {
    if (name==''||email=="" || gpa=="") {
        alert('You must add all data')
        return;
    }
    const newUser: User = {
      id: students.length + 1,
      name: name,
      email: email,
      gpa: Number(gpa)
    };
    
    setStudents([...students, newUser]);
    setName('')
    setEmail('')
    setGpa('')
  };

  const handleSubmit =(event:any)=>{
    event.preventDefault()

}


  return (
    <div>
    <form className='students' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e=>setName(e.target.value)} required/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
      </div>
      <div>
        <label htmlFor="email">GPA:</label>
        <input type="number" id="number" value={gpa} onChange={e=>setGpa(Number(e.target.value))} required/>
      </div>
      <button onClick={addUser}>Add Students</button>
     
    </form>
  
  </div>
  )
}

export default AddStudents
