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
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
          calculateStreak={calculateStreak}
          editHabit={editHabit}
        />
      ))}
    </div>
  );
};

export default HabitList;
