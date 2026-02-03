export default function WorkoutForm({ exerciseName, setExerciseName, duration, setDuration, calories, setCalories }) {
    const Reset = () => {
        setExerciseName("");
        setDuration(0);
        setCalories(0);
    }
    return(
        <div className="workout-form">
            <h1>Exercise Name</h1>
            <input type="text"
             placeholder="ExerciseName"
              value={exerciseName} 
              onChange={(e) => setExerciseName(e.target.value)} />

            <h1>Duration (minutes)</h1>
            <input type="number"
             placeholder="Duration"
              value={duration} 
              onChange={(e) => setDuration(Number(e.target.value))} />

            <h1>Calories Per Minute</h1>
            <input type="number"
             placeholder="Calories"
              value={calories} 
              onChange={(e) => setCalories(Number(e.target.value))} />

            <button onClick={Reset}>Reset</button>


        </div>
    )
}