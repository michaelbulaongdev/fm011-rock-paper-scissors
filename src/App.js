import './App.css';
import {useState} from 'react';
import ScoreSection from './components/ScoreSection';
import GameSection from './components/GameSection';
import ResultSection from './components/ResultSection';
import RulesModal from './components/RulesModal';

export default function App() {
	const [hasPicked, setHasPicked] = useState(false);
	const [loading, setLoading] = useState(true);
	const [choice, setChoice] = useState('');
	const [computerPick, setComputerPick] = useState('');
	const [message, setMessage] = useState('DRAW');
	const [score, setScore] = useState(0);

	const housePick = () => {
		const gestList = ['paper', 'scissors', 'rock'];
		const rng = Math.floor(Math.random() * 3);
		return gestList[rng];
	};

	const handleClick = (e) => {
		setHasPicked(true);
		setChoice(e);
		setTimeout(() => {
			setComputerPick(housePick());
			setLoading(false);
		}, 2000);
	};

	const playAgain = () => {
		setHasPicked(false);
		setLoading(true);
		setChoice('');
		setComputerPick('');
		setMessage('DRAW');
	};

	return (
		<main className='App'>
			<ScoreSection score={score} />
			{hasPicked ? (
				<ResultSection
					loading={loading}
					humanPick={choice}
					computerPick={computerPick}
					message={message}
					playAgain={playAgain}
				/>
			) : (
				<GameSection handleClick={handleClick} />
			)}
			<RulesModal />
		</main>
	);
}
