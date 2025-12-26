import React, {useState} from 'react'
import '../../src/styles/form.css'
import useCourseStore from '../app/courseStore'

const CourseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse)
    const [courseTitle, setCourseTitle] = useState("");
    console.log("CourseForm Rendered")

    const handleCourseSubmit = () =>{
        if(!courseTitle) return alert("Please add course title")
        addCourse({
            id: Math.ceil(Math.random()*1000000),
            title: courseTitle
    })
    setCourseTitle("")
    }
  return (
    <div className='form-container'>
        <input type='text' onChange={(e) => setCourseTitle(e.target.value)} className='form-input' value={courseTitle} />
        <button onClick={()=> handleCourseSubmit()} className='form-submit-btn'>Add Course</button>
    </div>
  )
}

export default CourseForm