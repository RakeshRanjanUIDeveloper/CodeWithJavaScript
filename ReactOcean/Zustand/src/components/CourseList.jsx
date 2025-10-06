import React from 'react'
import useCourseStore from '../app/courseStore'
import {shallow} from 'zustand/shallow';

const CourseList = () => {
  const courses = useCourseStore(state => state.courses);
  const removeCourse = useCourseStore(state => state.removeCourse);
  const toggleCourseStatus = useCourseStore(state => state.toggleCourseStatus);
  return (
    <>
        <ul>
            {courses.map((course, id)=>{
                return (
                    <React.Fragment key={id}>
                        <li className='course-item' style={{ backgroundColor: course.completed ? "#00ff0044" : "white" }}>
                            <span className='course-item-col-1'>
                                <input checked={course.completed} onChange={(e) => toggleCourseStatus(course.id)} type='checkbox' />
                            </span>
                            <span className='course-title'>{course?.title}</span>
                            <button className='delete btn' onClick={() => removeCourse(course.id)}>Delete</button>
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
    </>
  )
}

export default CourseList