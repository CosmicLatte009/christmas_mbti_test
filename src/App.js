import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import AllResultPage from "./pages/AllResultPage";
import { Routes, Route } from "react-router-dom";
import "./style/commonStyle/reset.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/question" element={<QuestionPage />} />
			<Route path="/result" element={<ResultPage />} />
			<Route path="/allResult" element={<AllResultPage />} />
		</Routes>
	);
}

export default App;
