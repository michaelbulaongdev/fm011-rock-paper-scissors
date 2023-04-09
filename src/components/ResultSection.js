import {useState} from 'react';
import HandGesture from './HandGesture';

export default function ResultSection(props) {
	const [loading, setLoading] = useState(true);
	const rng = Math.floor(Math.random() * 3) + 1;

	let winner = 'YOU WON';

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
			<div className='winner-section'>
				<h1 className='winner-text'>{winner}</h1>
				<button className='play-button'>PLAY AGAIN</button>
			</div>
		</section>
	);
}
