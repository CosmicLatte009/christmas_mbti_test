import React, { useEffect } from "react";
import { ReactComponent as KakaoBtn } from "../assets/svg/icon_kakao.svg";
const { Kakao } = window;

const KakaoShareButton = ({ resultData }) => {
	const url = "https://christmas-mbti-test.netlify.app";
	const resultUrl = window.location.href;

	useEffect(() => {
		Kakao.cleanup();
		Kakao.init("ce4904e6614dfe509f2083cb25781476");
	}, []);

	const shareKakao = () => {
		// 링크가 전송되면 앱의 링크 콜백이 설정된 URL 및 메소드로 콜백이 전송됩니다.
		Kakao.Share.sendDefault({
			objectType: "feed",
			content: {
				title: "크리스마스 질투 유형 결과",
				description: `당신의 질투 유형 결과는 ${resultData.name}입니다`,
				imageUrl: url + resultData.image,
				link: {
					mobileWebUrl: resultUrl,
					webUrl: resultUrl,
				},
			},
			buttons: [
				{
					title: "나도 테스트 하러가기",
					link: {
						mobileWebUrl: url,
						webUrl: url,
					},
				},
			],
		});
	};
	return <KakaoBtn onClick={shareKakao} />;
};

export default KakaoShareButton;
