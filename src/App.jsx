import { useState } from 'react'
import CourseList from './components/CourseList'
import CourseForm from './components/CourseForm'


function App() {
  const [courses, setCourses] = useState(
    [
      {id: 1, name: 'Maths'},
      {id: 2, name: 'English'},
      {id: 3, name: 'History'},
      {id: 4, name: 'Science'},
    ]);
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  }
  const [newCourse, setNewCourse] = useState('');

  return (
    <div>
      <CourseForm courses={courses} setCourses={setCourses} newCourse={newCourse} setNewCourse={setNewCourse}/>
      <CourseList courses={courses} onDelete={handleDeleteCourse}/>
    </div>
  )

}

export default App
