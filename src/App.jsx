import { useState } from "react";

const App = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Drinking Water",
      completed: false,
      completedDates: [],
      category: "Health",
    },
    {
      id: 2,
      name: "Walking",
      completed: false,
      completedDates: [],
      category: "Fitness",
    },
    {
      id: 3,
      name: "Reading",
      completed: false,
      completedDates: [],
      category: "Learning",
    },
    {
      id: 4,
      name: "Exercise",
      completed: false,
      completedDates: [],
      category: "Fitness",
    },
  ]);

  const today = new Date().toISOString().split("T")[0];

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,

              completedDates: habit.completed
                ? habit.completedDates.filter((date) => date !== today)
                : [...habit.completedDates, today],
            }
          : habit,
      ),
    );
  };

  const [newHabit, setNewHabit] = useState("");
  const [category, setCategory] = useState("Health");
  const [filterCategory, setFilterCategory] = useState("All");

  const addHabit = () => {
    if (newHabit.trim() === "") return;

    const habit = {
      id: Date.now(),
      name: newHabit,
      completed: false,
      completedDates: [],
      category: category,
    };

    setHabits([...habits, habit]);
    setNewHabit("");
    setCategory("Health");
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const completedHabits = habits.filter((habit) => habit.completed);

  const completedPercentage =
    habits.length === 0
      ? 0
      : Math.round((completedHabits.length / habits.length) * 100);

  return (
    <div>
      <h1>Habit Tracker</h1>

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

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Health">Health</option>
        <option value="Fitness">Fitness</option>
        <option value="Personal">Personal</option>
        <option value="Learning">Learning</option>
      </select>

      {habits.map((habit) => (
        <div className="habit-item" key={habit.id}>
          <input
            type="checkbox"
            checked={habit.completed}
            onChange={() => toggleHabit(habit.id)}
          />
          <span>{habit.name}</span>
          <span>{habit.category}</span>

          <button className="del" onClick={() => deleteHabit(habit.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
