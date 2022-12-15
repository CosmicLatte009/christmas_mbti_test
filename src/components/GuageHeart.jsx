import React from "react";
import { ReactComponent as Heart } from "../assets/svg/icon_heart.svg";
import styles from "../style/GuageHeart.module.scss";

const Guage = (props) => {
	const { children, arr } = props;

	return (
		<div className={styles.guage}>
			<p>{children}</p>
			{arr.map((item, index) => (
				<span key={index}>
					<Heart className={styles["heart-icon"]} />
				</span>
			))}
		</div>
	);
};

export default Guage;
