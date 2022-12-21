import React, { useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";
import { ReactComponent as Candles } from "../assets/svg/icon_candles.svg";
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
	);
};

export default AllResultPage;
