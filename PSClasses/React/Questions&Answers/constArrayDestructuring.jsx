
================
- const [value, setValue] = useState('0');
- const is used because we are using array destructuring to extract the state value
  and the updater function from useState()
- We are not reassigning the variables value or setValue later in the code
- we only use setValue() to update the state, which causes a re-render,
  but we never do something like value = 'newValue'.
- let allows reassignment — which we dont need here.
- var is function-scoped and can lead to bugs due to hoisting — not recommended in modern React code.