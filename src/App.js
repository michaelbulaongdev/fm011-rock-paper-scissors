import './App.css';
import {useEffect, useState} from 'react';
import ScoreSection from './components/ScoreSection';
import GameSection from './components/GameSection';
import ResultSection from './components/ResultSection';
import RulesModal from './components/RulesModal';

function App() {
	const [hasPicked, setHasPicked] = useState(false);
	const [loading, setLoading] = useState(true);
	const [humanPick, setHumanPick] = useState('');
	const [computerPick, setComputerPick] = useState('');
	const [message, setMessage] = useState('DRAW');
	const [score, setScore] = useState(0);

	const housePick = () => {
		const gestList = ['paper', 'scissors', 'rock'];
		const rng = Math.floor(Math.random() * 3);
		return gestList[rng];
	};

	const evaluate = () => {
		if (humanPick === computerPick) {
			setMessage('DRAW');
		} else if (
			(humanPick === 'scissors' && computerPick === 'paper') ||
			(humanPick === 'paper' && computerPick === 'rock') ||
			(humanPick === 'rock' && computerPick === 'scissors')
		) {
			setMessage('YOU WIN');
			setScore(score + 1);
		} else {
			setMessage('YOU LOSE');
			setScore(score - 1);
		}
	};

	const handleClick = (e) => {
		setHasPicked(true);
		setHumanPick(e);
		setTimeout(() => {
			setComputerPick(housePick());
			setLoading(false);
		}, 2000);
	};

	const playAgain = () => {
		setHasPicked(false);
		setLoading(true);
		setHumanPick('');
		setComputerPick('');
		setMessage('DRAW');
	};

	useEffect(() => {
		evaluate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [computerPick]);

	return (
		<main className='App'>
			<ScoreSection score={score} />
			{hasPicked ? (
				<ResultSection
					loading={loading}
					humanPick={humanPick}
					computerPick={computerPick}
					message={message}
					playAgain={playAgain}
				/>
			) : (
				<GameSection handleClick={handleClick} />
			)}
			<RulesModal />
			<footer className='footer-container'>
				<a
					className='footer'
					href='https://github.com/michaelbulaongdev/fm011-rock-paper-scissors'
					target='_blank'
					rel='noreferrer'>
					michaelbulaongdev | gh-repo
				</a>
			</footer>
		</main>
	);
}

export default App;
