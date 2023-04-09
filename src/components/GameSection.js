import Triangle from '../images/bg-triangle.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';

export default function GameSection(props) {
	const handleClick = props.handleClick;

	return (
		<section className='game-section-container'>
			<div className='triangle-container'>
				<img
					className='triangle-image'
					src={Triangle}
					alt='inverted triangle'
				/>
				<div className='hand-all-container'>
					<button
						className='hand-container paper-position paper-color'
						onClick={() => handleClick('paper')}>
						<img className='hand-image' src={Paper} alt='paper hand gesture' />
					</button>
					<button
						className='hand-container rock-position rock-color'
						onClick={() => handleClick('rock')}>
						<img className='hand-image' src={Rock} alt='rock hand gesture' />
					</button>
					<button
						className='hand-container scissors-position scissors-color'
						onClick={() => handleClick('scissors')}>
						<img
							className='hand-image'
							src={Scissors}
							alt='scissors hand gesture'
						/>
					</button>
				</div>
			</div>
		</section>
	);
}
