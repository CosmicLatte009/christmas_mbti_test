import React from "react";
import { ReactComponent as FacebookBtn } from "../../assets/svg/icon_facebook.svg";

const FacebookShareButton = () => {
	const resultUrl = window.location.href;

	const shareFacebook = () => {
		window.open("http://www.facebook.com/sharer/sharer.php?u=" + resultUrl);
	};
	return <FacebookBtn onClick={shareFacebook} />;
};
export default FacebookShareButton;
