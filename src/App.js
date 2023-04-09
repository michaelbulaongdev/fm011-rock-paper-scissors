import './App.css';
import {useState} from 'react';
import ScoreSection from './components/ScoreSection';
import GameSection from './components/GameSection';
import ResultSection from './components/ResultSection';
import RulesModal from './components/RulesModal';

function App() {
	const [score, setScore] = useState(0);
	return (
		<main className='App'>
			<ScoreSection score={score} />
			<GameSection />
			<ResultSection />
			<RulesModal />
		</main>
	);
}

export default App;
