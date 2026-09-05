import { useState } from "react";

const HabitItem = ({
  habit,
  toggleHabit,
  deleteHabit,
  calculateStreak,
  editHabit,
}) => {
  const [isEditting, setIsEditting] = useState(false);
  const [editedName, setEditedName] = useState(habit.name);
  const [editedCategory, setEditedCategory] = useState(habit.category);

  return (
    <div
      className={`habit-item ${habit.completed ? "completed" : ""}`}
      key={habit.id}
    >
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => toggleHabit(habit.id)}
      />
      {isEditting ? (
        <div className="edit-mode">
          <input
            className="edit-input"
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />

          <select
            className="edit-select"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          >
            <option value="Health">Health</option>
            <option value="Fitness">Fitness</option>
            <option value="Personal">Personal</option>
            <option value="Learning">Learning</option>
          </select>

          <button
            className="save"
            onClick={() => {
              editHabit(habit.id, editedName, editedCategory);
              setIsEditting(false);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <span>{habit.name}</span>

          <span>{habit.category}</span>

          <p className="streak">
            🔥 {calculateStreak(habit.completedDates)} day streak
          </p>

          <button className="edit" onClick={() => setIsEditting(true)}>
            Edit
          </button>

          <button className="del" onClick={() => deleteHabit(habit.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default HabitItem;
