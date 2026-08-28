import { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import ProgressBar from "./components/ProgressBar";
import CategoryFilter from "./components/CategoryFilter";
import HabitList from "./components/HabitList";

const App = () => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");

    if (savedHabits) {
      return JSON.parse(savedHabits);
    }

    return [
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
    ];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

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

  const calculateStreak = (completedDates) => {
    const today = new Date();

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const formatDate = (date) => {
      return date.toISOString().split("T")[0];
    };
    const todayString = formatDate(today);
    console.log(completedDates.includes(todayString));

    const yesterdayString = formatDate(yesterday);
    console.log(completedDates.includes(yesterdayString));

    const completedToday = completedDates.includes(todayString);

    let currentDate = today;

    if (!completedToday) {
      currentDate = yesterday;
    }
    console.log("completed today:", completedToday);
    console.log("Starting date:", formatDate(currentDate));

    let streak = 0;

    while (completedDates.includes(formatDate(currentDate))) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    }
    return streak;
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

  const filteredHabits = habits.filter((habit) => {
    return filterCategory === "All" || habit.category === filterCategory;
  });

  return (
    <div>
      <h1>Habit Tracker</h1>

      <HabitForm
        newHabit={newHabit}
        setNewHabit={setNewHabit}
        category={category}
        setCategory={setCategory}
        addHabit={addHabit}
      />

      <ProgressBar
        completedHabits={completedHabits}
        habits={habits}
        completedPercentage={completedPercentage}
      />

      <CategoryFilter
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />

      <HabitList
        habits={filteredHabits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
        calculateStreak={calculateStreak}
      />
    </div>
  );
};

export default App;
