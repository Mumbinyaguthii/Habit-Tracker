import HabitItem from "./HabitItem";

const HabitList = ({
  habits,
  toggleHabit,
  deleteHabit,
  calculateStreak,
  editHabit,
}) => {
  return (
    <div>
      {habits.length === 0 ? (
        <p className="empty-space">No habits found.</p>
      ) : (
        habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            toggleHabit={toggleHabit}
            deleteHabit={deleteHabit}
            calculateStreak={calculateStreak}
            editHabit={editHabit}
          />
        ))
      )}
    </div>
  );
};

export default HabitList;
