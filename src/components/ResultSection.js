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
				<div>
					<HandGesture choice={humanPick} message={message} />
					<p className='picked-text'>YOU PICKED</p>
				</div>
				<div>
					<HandGesture choice={computerPick} message={message} />
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
