import React from "react";
import FacebookShareButton from "../components/FacebookShareButton";
import KakaoShareButton from "../components/KakaoShareButton";
import TwitterShareButton from "../components/TwitterShareButton";
import styles from "../style/ShareButton.module.scss";

const ShareButton = ({ resultData }) => {
	return (
		<div className={styles["sns-group"]}>
			<FacebookShareButton />
			<KakaoShareButton resultData={resultData} />
			<TwitterShareButton resultData={resultData} />
		</div>
	);
};
export default ShareButton;
