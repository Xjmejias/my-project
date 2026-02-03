import React from 'react';
function BurnSummary({ exerciseName, duration, calories }) {
    console.log('BurnSummary props:', { exerciseName, duration, calories });
    const total = (Number(calories) || 0) * (Number(duration) || 0);
    return (
        <div className="burn-summary">
            <h2>Burn Summary</h2>
            <p>Exercise Name: {exerciseName}</p>
            <p>Duration: {duration} minutes</p>
            <p>Calories Burned: {total} kcal</p>
        </div>
    );
}
export default BurnSummary;