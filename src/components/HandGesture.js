import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';

export default function HandGesture(props) {
	let gesture;
	let gest;
	switch (props.choice) {
		case 'paper':
			gesture = Paper;
			gest = 'paper';
			break;
		case 'scissors':
			gesture = Scissors;
			gest = 'scissors';
			break;
		case 'rock':
			gesture = Rock;
			gest = 'rock';
			break;
		default:
			gesture = null;
			gest = '';
			break;
	}
	return (
		<div className={`hand-container ${gest}-color`}>
			<img src={gesture} alt={`${gest} hand gesture`} />
		</div>
	);
}
