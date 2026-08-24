import { useState } from "react";

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drinking Water", completed: false },
    { id: 2, name: "Walking", completed: false },
    { id: 3, name: "Reading", completed: false },
    { id: 4, name: "Exercise", completed: false },
  ]);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit,
      ),
    );
  };

  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim() === "") return;

    const habit = {
      id: Date.now(),
      name: newHabit,
      completed: false,
    };

    setHabits([...habits, habit]);
    setNewHabit("");
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>

      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
      />

      <button onClick={addHabit}>Add Habit</button>

      {habits.map((habit) => (
        <div key={habit.id}>
          <input
            type="checkbox"
            checked={habit.completed}
            onChange={() => toggleHabit(habit.id)}
          />
          <span>{habit.name}</span>

          <button onClick={() => deleteHabit(habit.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
