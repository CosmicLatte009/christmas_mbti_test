import React from "react";
import FacebookShareButton from "./FacebookShareButton";
import KakaoShareButton from "./KakaoShareButton";
import TwitterShareButton from "./TwitterShareButton";
import styles from "../../style/shareButtonStyle/ShareButton.module.scss";

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
