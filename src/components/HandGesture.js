import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';
import LoadingIcon from '../images/Gear-0.5s-78px.svg';

export default function HandGesture({choice}) {
	let gesture;
	let gest;
	switch (choice) {
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
			gesture = LoadingIcon;
			gest = 'loading';
			break;
	}
	return (
		<div className={`hand-picked ${gest}-color`}>
			<img src={gesture} alt={`${gest} hand gesture`} />
		</div>
	);
}
