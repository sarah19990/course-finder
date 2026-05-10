import { useState } from 'react'


function App() {
  const [courses, setCourses] = useState(
    [
      {id: 1, name: 'Maths'},
      {id: 1, name: 'English'},
      {id: 1, name: 'History'},
      {id: 1, name: 'Science'},
    ]);
  const [newCourse, setNewCourse] = useState('');


  return (
    <div>
      <h1>Course Finder</h1>
       <ul>
        {courses.map((course, index) => (
          <li key={course.id}>{course.name}</li>
        ))}
       </ul>
       <input type="text" value={newCourse} onChange={(e) => setNewCourse(e.target.value)}/>
       <button onClick={() => setCourses([...courses, {id: courses.length + 1, name: newCourse}])}>Add Course</button>
    </div>
      
  )
}

export default App
