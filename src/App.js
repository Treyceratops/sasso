import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';

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
				</Routes>
				<div className='push'></div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
