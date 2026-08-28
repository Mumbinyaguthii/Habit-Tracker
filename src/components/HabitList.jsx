import HabitItem from "./HabitItem";

const HabitList = ({ habits, toggleHabit, deleteHabit, calculateStreak }) => {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
          calculateStreak={calculateStreak}
        />
      ))}
    </div>
  );
};

export default HabitList;
