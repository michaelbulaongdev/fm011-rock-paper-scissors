import './App.css';
import ScoreSection from './components/ScoreSection';
import GameSection from './components/GameSection';
import ResultSection from './components/ResultSection';
import RulesModal from './components/RulesModal';

function App() {
	return (
		<main className='App'>
			<ScoreSection />
			<GameSection />
			<ResultSection />
			<RulesModal />
		</main>
	);
}

export default App;
