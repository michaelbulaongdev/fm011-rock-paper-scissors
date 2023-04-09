import HandGesture from './HandGesture';

export default function ResultSection(props) {
	const rng = Math.floor(Math.random() * 3) + 1;

	return (
		<section className='result-section-container'>
			<div className='human-vs-computer'>
				<div className='human-picked'>
					<HandGesture choice={props.choice} />
					<p className='picked-text'>YOU PICKED</p>
				</div>
				<div className='computer-picked'>
					<HandGesture choice={'rock'} />
					<p className='picked-text'>THE HOUSE PICKED</p>
				</div>
			</div>
		</section>
	);
}
