const Progress = ({ habits, calculateStreak }) => {
  const today = new Date().toISOString().split("T")[0];

  const completedToday = habits.filter((habit) =>
    habit.completedDates.includes(today),
  ).length;

  const getDateForDay = (dayIndex) => {
    const date = new Date();
    const currentDay = date.getDay();

    const mondayIndex = currentDay === 0 ? 6 : currentDay - 1;

    date.setDate(date.getDate() - mondayIndex + dayIndex);

    return date.toISOString().split("T")[0];
  };

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section className="progress-container">
      <h2>Progress</h2>

      <div className="progress-header">
        <p>Your Progress This Week</p>
      </div>

      <div className="progress-stats">
        <div className="stat-card">
          <h3>{habits.length}</h3>
          <p>Total Habits</p>
        </div>

        <div className="stat-card">
          <h3>{completedToday}</h3>
          <p>Completed Today</p>
        </div>

        <div className="stat-card">
          <h3>
            {" "}
            {habits.length > 0
              ? Math.max(
                  ...habits.map((habit) =>
                    calculateStreak(habit.completedDates),
                  ),
                )
              : 0}
          </h3>
          <p>Current Streak</p>
        </div>
      </div>

      <div className="weekly-progress">
        <h3>Weekly Progress</h3>

        <div className="week-days">
          {weekDays.map((day, index) => {
            const date = getDateForDay(index);

            const completed = habits.some((habit) =>
              habit.completedDates.includes(date),
            );

            return (
              <div
                key={day}
                className={`day ${completed ? "completed-day" : ""}`}
              >
                <span>{day}</span>
                <div className="day-circle">{completed ? "✓" : ""}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Progress;
