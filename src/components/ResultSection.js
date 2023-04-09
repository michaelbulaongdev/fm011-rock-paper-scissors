import HandGesture from './HandGesture';

export default function ResultSection(props) {
	return (
		<section className='result-section-container'>
			<div className='human-vs-computer'>
				<div className='human-picked'>
					<HandGesture choice={props.choice} />
					<p className='picked-text'>YOU PICKED</p>
				</div>
			</div>
		</section>
	);
}
