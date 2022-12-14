import React from "react";

const Button = ({ ...props }) => {
	const { children, onClick, className } = props;
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
