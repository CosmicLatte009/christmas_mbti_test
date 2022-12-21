import React, { useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";
import { ReactComponent as Candles } from "../assets/svg/icon_candles.svg";
import { Helmet } from "react-helmet";
import Wrapper from "../components/common/Wrapper";
import Button from "../components/common/Button";
import styles from "../style/pagesStyle/AllResultPage.module.scss";

const AllResultPage = () => {
	const navigate = useNavigate();
	const handleBoxClick = (type) => {
		navigate({
			pathname: "/result",
			search: `?${createSearchParams({ mbti: type })}`,
		});
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
				<meta
					property="og:image"
					content="https://christmas-mbti-test.netlify.app/static/media/06_gingerBread.bc34159964227c1f3817.png"
				/>
				<meta
					property="og:url"
					content="https://christmas-mbti-test.netlify.app"
				/>
				<link rel="icon" href="./assets/svg/favicon.svg" />
				<link rel="apple-touch-icon" href="./assets/svg/favicon.svg" />
				<meta
					name="description"
					content="연애할 때 내 질투의 정도를 알아보는 재미용 심리 테스트입니다."
				/>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>크리스마스 질투 유형 테스트</title>
			</Helmet>
			<Wrapper className={styles.wrap}>
				<Candles className={styles["candles-icon"]} />
				<h1 className={styles.title}>질투 유형 순위</h1>
				<main>
					<section className={styles.boxes}>
						{ResultData.map((item, index) => (
							<div
								key={item.id}
								className={styles.box}
								onClick={() => handleBoxClick(ResultData[index].type)}
							>
								<span className={styles.ranking}>{item.id}위</span>
								<img src={item.image} alt="유형 이미지" />
								<p>{item.name}</p>
							</div>
						))}
					</section>
					<div className={styles["btn-wrap"]}>
						<Button bold onClick={() => navigate("/")}>
							테스트 다시하기
						</Button>
					</div>
				</main>
			</Wrapper>
		</>
	);
};

export default AllResultPage;
