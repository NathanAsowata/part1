
const Total = ({parts}) => {
    
    const numOfExercises = [];
    parts.map(part => numOfExercises.push(part.exercises))

    return(
        <p>The total number of exercises is {numOfExercises.reduce((a,b) => a + b)}</p>
    )
}

export default Total