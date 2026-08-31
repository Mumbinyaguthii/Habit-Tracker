const HabitForm = ({
  newHabit,
  setNewHabit,
  category,
  setCategory,
  addHabit,
}) => {
  return (
    <div className="habit-form">
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Health">Health</option>
        <option value="Fitness">Fitness</option>
        <option value="Personal">Personal</option>
        <option value="Learning">Learning</option>
      </select>

      <button className="add" onClick={addHabit}>
        Add Habit
      </button>
    </div>
  );
};

export default HabitForm;
