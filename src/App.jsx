import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage/>} />
        {/* <Route path="game" element={<QuizPage/>} />
        <Route path="/game/results" element={<ResultsPage/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
