

const Hello = (props) => {
    const thisYear = new Date().getFullYear()

  return (
    <h1>Hello, {props.name}, you are {props.age}, so you were probably born in {thisYear - props.age}</h1>
  )
}

export default Hello