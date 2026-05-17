function CourseList({courses, onDelete}) {
  return (
      <div>
        <h1>
          Course List
        </h1>
        <ul>
          {courses.map((course) => (
          <li key={course.id}>{course.name} 
          <button onClick={() => onDelete(course.id)}>Delete Course</button>
          </li>
        ))}
        </ul>
      </div>
  )
    

   
}

export default CourseList
