import React from 'react'
import Counter from './Counter'
import MyInput from './MyInput'
import MyCheckbox from './MyCheckbox'
import Form from './Form'
import CounterOne from './CounterOne'
import FormObject from './FormObject'
import FormNestedObject from './FormNestedObject'

const UseState = () => {
  return (
    <React.Fragment>
        <Counter />
        <MyInput />
        <MyCheckbox />
        <Form />
        <CounterOne />
        <FormObject />
        <FormNestedObject />
    </React.Fragment>
  )
}

export default UseState