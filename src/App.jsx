import { useState } from "react";
import WorkoutForm from "./WorkoutForm.jsx";
import BurnSummary from "./BurnSummary.jsx";
import "./App.css";
function App() {
    const [ExerciseName, setExerciseName] = useState("");
    const [Duration, setDuration] = useState(0);
    const [Calories, setCalories] = useState(0);
    return (
        <div className="App">
            <WorkoutForm
                exerciseName={ExerciseName}
                setExerciseName={setExerciseName}
                duration={Duration}
                setDuration={setDuration}
                calories={Calories}
                setCalories={setCalories}
            />
            <BurnSummary
                exerciseName={ExerciseName}
                duration={Duration}
                calories={Calories}
            />
        </div>
    );
}

export default App
