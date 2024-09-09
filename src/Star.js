import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const Star = ({ noOfStars }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const handleClick = (i) => {
		setRating(i);
	};
	const handleMove = (i) => {
		setHover(i);
	};
	const handleLeave = () => {
		setHover(rating);
	};

	return (
		<div className="flex justify-center items-center h-full">
			{[...Array(noOfStars)].map((_, index) => {
				index += 1;
				return (
					<FaStar
						style={
							index <= (hover || rating)
								? { color: 'yellow' }
								: { color: 'black' }
						}
						className="text-9xl"
						key={index}
						onClick={() => handleClick(index)}
						onMouseMove={() => handleMove(index)}
						onMouseLeave={() => handleLeave(index)}
					/>
				);
			})}
		</div>
	);
};
export default Star;
