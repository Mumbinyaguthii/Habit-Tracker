const Progress = ({ habits }) => {
  return (
    <section className="progress-container">
      <h2>Progress</h2>

      <div className="Progress-header">
        <p>Your Progress This week</p>
      </div>

      <div className="Progress-stats">
        <div className="stat-card">
          <h3>{habits.length}</h3>
          <p>Total Habits</p>
        </div>

        <div className="stat-card">
          <h3>0</h3>
          <p>Completed Today</p>
        </div>

        <div className="stat-card">
          <h3>0</h3>
          <p>Current Streak</p>
        </div>
      </div>

      <div className="weekly-progress">
        <h3>Weekly Progress</h3>

        <div className="week-days">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </section>
  );
};

export default Progress;
