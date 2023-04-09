import Logo from '../images/logo.svg';

export default function ScoreSection(props) {
	return (
		<section className='score-section-container'>
			<div className='game-title-container'>
				<img className='game-title' src={Logo} alt='game-logo' />
				<div className='game-title-spacer'></div>
			</div>
			<div className='score-box'>
				<p className='score-label'>SCORE</p>
				<div className='score-text-container'>
					<h1 className='score-text'>{props.score}</h1>
				</div>
			</div>
		</section>
	);
}
