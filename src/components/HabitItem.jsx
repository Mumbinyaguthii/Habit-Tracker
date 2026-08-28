const HabitItem = ({ habit, toggleHabit, deleteHabit, calculateStreak }) => {
  return (
    <div className="habit-item" key={habit.id}>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => toggleHabit(habit.id)}
      />
      <span>{habit.name}</span>
      <span>{habit.category}</span>
      <p>🔥 {calculateStreak(habit.completedDates)} day streak</p>
      <p>{habit.completedDates.join(", ")}</p>

      <button className="edit">Edit</button>

      <button className="del" onClick={() => deleteHabit(habit.id)}>
        Delete
      </button>
    </div>
  );
};

export default HabitItem;
