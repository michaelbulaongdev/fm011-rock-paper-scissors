import Logo from '../images/logo.svg';

export default function ScoreSection() {
	return (
		<section>
			<div className='score-header'>
				<div>
					<img src={Logo} alt='game-logo' />
				</div>
			</div>
		</section>
	);
}
