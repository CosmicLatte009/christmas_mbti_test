import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import AllResultPage from "./pages/AllResultPage";
import favicon from "./assets/svg/favicon.svg";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./style/commonStyle/reset.css";

function App() {
	return (
		<>
			<Helmet>
				<meta
					name="naver-site-verification"
					content="40a12bac3fad1a6b0bddfbd55952079d48ef2a12"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="크리스마스 질투 유형 테스트" />
				<meta
					property="og:description"
					content="연애할 때 내 질투의 정도를 알아보는 재미용 심리 테스트입니다."
				/>
				<meta property="og:image" content="./assets/svg/logo.svg" />
				<meta
					property="og:url"
					content="https://christmas-mbti-test.netlify.app"
				/>
				<link rel="icon" href={favicon} />
				<link rel="apple-touch-icon" href={favicon} />
				<meta
					name="description"
					content="연애할 때 내 질투의 정도를 알아보는 재미용 심리 테스트입니다."
				/>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>크리스마스 질투 유형 테스트</title>
			</Helmet>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/question" element={<QuestionPage />} />
				<Route path="/result" element={<ResultPage />} />
				<Route path="/allResult" element={<AllResultPage />} />
			</Routes>
		</>
	);
}

export default App;
