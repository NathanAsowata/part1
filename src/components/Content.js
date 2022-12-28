import Part from "./Part"

const Content = ({parts}) => {

  const Exercises= [];
  // const total = Exercises.reduce((a,b) => a+b)
  
  return (
    <>
      {parts.map((part, id) => {
          Exercises.push(part.exercises);
          return <Part part={part.name} exercises={part.exercises} key={id} />
      })}
      <h4>Total of {Exercises.reduce((a,b) => a+b)} exercises</h4>
      
    </>
  )
}

export default Content