import { useState } from "react";
import Image from "next/image";

const squares = [
	{
		index: 1,
		text: "Inviting you for sushi ❤",
	},
	{
		index: 2,
		text: "Shein package ❤",
	},
	{
		index: 3,
		text: "Bubble tea and KFC ❤",
	},
	{
		index: 4,
		text: "Trip to the zoo ❤",
	},
	{
		index: 5,
		text: "Cinema ❤",
	},
	{
		index: 6,
		text: "Nothing ❤",
	},
];

export default function Home() {
	const [isAccepted, setIsAccepted] = useState<boolean | null>(null);
	const [clickedText, setClickedText] = useState<string | null>(null);
	const [clickedIndex, setClickedIndex] = useState<number | null>(null);

	const handleYesClick = () => {
		setIsAccepted(true);
	};

	const handleNoClick = () => {
		setIsAccepted(false);
	};

	const handleBoxClick = (index: number, text: string) => {
		if (clickedIndex === null) {
			setClickedIndex(index);
			setClickedText(text);
		}
	};

	return (
		<>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content text-center flex flex-col items-center justify-center">
					{isAccepted === true ? (
						<div className="grid grid-cols-3 gap-4">
							{squares
								.sort(() => Math.random() - 0.5)
								.map(square => (
									<div
										key={square.index}
										className={`flex items-center justify-center w-24 h-24 ${
											clickedIndex === square.index
												? "bg-primary"
												: "bg-pink-200"
										} rounded-lg cursor-pointer`}
										onClick={() => handleBoxClick(square.index, square.text)}
									>
										❤️
									</div>
								))}
						</div>
					) : (
						<div className="max-w-xl flex flex-col items-center justify-center gap-6 mx-auto">
							<Image
								src="/emoji.png"
								alt="Valentine"
								width={500}
								height={500}
								className="mr-28"
							/>
							<div className="text-center flex flex-col items-center">
								<h1 className="text-5xl font-bold">
									Hi Elen!
									<br />
									Will you be my Valentine?
								</h1>
								<p className="py-6">
									You are the most beautiful I have ever seen. You make my heart
									skip a beat every time I see you.
								</p>
								<div className="flex gap-4">
									<button className="btn btn-primary" onClick={handleYesClick}>
										Yes I will
									</button>
									<button className="btn btn-secondary" onClick={handleNoClick}>
										No I won't :(
									</button>
								</div>
							</div>
						</div>
					)}
					{clickedText && (
						<div className="mt-4 text-2xl font-bold">
							Your Valentine's gift is:
							<br />
							<span className="text-primary">{clickedText}</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
