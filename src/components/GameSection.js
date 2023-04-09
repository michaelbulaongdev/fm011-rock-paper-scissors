import Triangle from '../images/bg-triangle.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';

export default function GameSection() {
	return (
		<section className='game-section-container'>
			<div className='triangle-container'>
				<img
					className='triangle-image'
					src={Triangle}
					alt='inverted triangle'
				/>
				<div className='hand-all-container'>
					<div className='hand-container paper'>
						<img className='hand-image' src={Paper} alt='paper hand gesture' />
					</div>
					<div className='hand-container rock'>
						<img className='hand-image' src={Rock} alt='rock hand gesture' />
					</div>
					<div className='hand-container scissors'>
						<img
							className='hand-image'
							src={Scissors}
							alt='scissors hand gesture'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
