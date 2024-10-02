/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ text, className = "text-white" }) => {
	const [isShrinking, setIsShrinking] = useState(false);

	const handleClick = () => {
		setIsShrinking(true);
		setTimeout(() => {
			setIsShrinking(false);
		}, 150);
	};
	return (
		<button
			className={`font-outfit transition-opacity block text-[16px] font-medium rounded-[5px] ${
				isShrinking ? "transform scale-90" : ""
			} transition-transform duration-500 ${className}`}
			onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
