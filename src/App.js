import React, { lazy } from "react";

import { Routes, Route } from "react-router-dom";
import "./style/commonStyle/reset.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const QuestionPage = lazy(() => import("./pages/QuestionPage"));
const ResultPage = lazy(() => import("./pages/ResultPage"));
const AllResultPage = lazy(() => import("./pages/AllResultPage"));

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
