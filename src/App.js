import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Kitchens from './components/Projects/Kitchens';
import Bathrooms from './components/Projects/Bathrooms';
import Decks from './components/Projects/Decks';
import GreenStreet from './components/Projects/GreenStreet';
import RhodeIsland from './components/Projects/RhodeIsland';
import StatesStreet from './components/Projects/StatesStreet';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/connect' element={<Connect />} />
					<Route path='/kitchens' element={<Kitchens />} />
					<Route path='/bathrooms' element={<Bathrooms />} />
					<Route path='/decks' element={<Decks />} />
					<Route path='/green-street' element={<GreenStreet />} />
					<Route path='/rhode-island' element={<RhodeIsland />} />
					<Route path='/states-street' element={<StatesStreet />} />
				</Routes>
				<div className='push'></div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
