function CourseForm({courses, setCourses, newCourse, setNewCourse}){
const handleAddCourse = () => {
setCourses([...courses, {id: courses.length + 1, name: newCourse}])}

return (
<div>
      <h1>Course Finder</h1>
       <input type="text" value={newCourse} onChange={(e) => setNewCourse(e.target.value)}/>
       <button onClick={handleAddCourse}>Add Course</button>
    </div>
);

}
export default CourseForm

