import HandGesture from './HandGesture';

export default function ResultSection({
	loading,
	humanPick,
	computerPick,
	message,
	playAgain,
}) {
	return (
		<section className='result-section-container'>
			<div className='human-vs-computer'>
				<div className='human-picked'>
					<HandGesture choice={humanPick} />
					<p className='picked-text'>YOU PICKED</p>
				</div>
				<div className='computer-picked'>
					<HandGesture choice={computerPick} />
					<p className='picked-text'>THE HOUSE PICKED</p>
				</div>
			</div>
			{!loading && (
				<div className='winner-section'>
					<h1 className='winner-text'>{message}</h1>
					<button className='play-button' onClick={() => playAgain()}>
						PLAY AGAIN
					</button>
				</div>
			)}
		</section>
	);
}
