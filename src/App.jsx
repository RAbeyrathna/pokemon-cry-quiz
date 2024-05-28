import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage/>} />
        <Route path="quiz" element={<QuizPage/>} />
        <Route path="/quiz/gameover" element={<GameOverPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
