import { useState } from "react";

const HabitItem = ({ habit, toggleHabit, deleteHabit, calculateStreak }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [editedName, setEditedName] = useState(habit.name);

  return (
    <div className="habit-item" key={habit.id}>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => toggleHabit(habit.id)}
      />
      {isEditting ? (
        <>
          <input
            type="text"
            Value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button>Save</button>
        </>
      ) : (
        <span>{habit.name}</span>
      )}
      ;<span>{habit.category}</span>
      <p>🔥 {calculateStreak(habit.completedDates)} day streak</p>
      <p>{habit.completedDates.join(", ")}</p>
      <button className="edit" onClick={() => setIsEditting(true)}>
        Edit
      </button>
      <button className="del" onClick={() => deleteHabit(habit.id)}>
        Delete
      </button>
    </div>
  );
};

export default HabitItem;
