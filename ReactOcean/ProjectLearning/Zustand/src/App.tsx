import React from "react";
// import { Container, Typography, Box } from "@mui/material";
// import AddHabitForm from "./components/AddHabitForm";
// import HabitList from "./components/HabitList";
// import HabitStats from "./components/HabitStats";
// import useHabitStore from "./store/store";
import CourseForm from '../src/components/CourseForm';
import CourseList from '../src/components/CourseList';
const App: React.FC = () => {
  // const { fetchHabits } = useHabitStore();

  // useEffect(() => {
  //   fetchHabits();
  // }, []);

  return (
    // <Container maxWidth="md">
    //   <Box sx={{ my: 4 }}>
    //     <Typography variant="h2" component="h1" gutterBottom align="center">
    //       Habit Tracker
    //     </Typography>
    //     <AddHabitForm />
    //     <HabitList />
    //     <HabitStats />
    //   </Box>
    // </Container>
    <div className="main-container">
        <h1>Course with Zustand</h1>
        <CourseForm />
        <CourseList />
    </div>
  );
};

export default App;