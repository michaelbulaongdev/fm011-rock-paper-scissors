import './App.css';
import {useState} from 'react';
import ScoreSection from './components/ScoreSection';
import GameSection from './components/GameSection';
import ResultSection from './components/ResultSection';
import RulesModal from './components/RulesModal';

function App() {
	const [hasPicked, setHasPicked] = useState(false);
	const [choice, setChoice] = useState(null);
	const [score, setScore] = useState(0);

	const handleClick = (e) => {
		setChoice(e);
		setHasPicked(true);
	};

	return (
		<main className='App'>
			<ScoreSection score={score} />
			{hasPicked ? (
				<ResultSection choice={choice} />
			) : (
				<GameSection handleClick={handleClick} />
			)}
			<RulesModal />
		</main>
	);
}

export default App;
