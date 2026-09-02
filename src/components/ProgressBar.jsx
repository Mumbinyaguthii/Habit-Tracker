const ProgressBar = ({ completedHabits, habits, completedPercentage }) => {
  return (
    <div className="progress-section">
      <p>
        {completedHabits.length} of {habits.length} habits completed.
        {""}
        {completedPercentage} % completed.
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${completedPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
