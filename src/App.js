import { Routes, Route } from 'react-router-dom';
import Footer from './component/layout/Footer';
import ProfileCard from './pages/ProfileCard/ProfileCard';
import Contact from './Contact';

function App() {
	return (
		<>
		<Routes>
			<Route path='/' element={<ProfileCard />} />
			<Route path='/Contact' element={ <Contact /> } />
			
		</Routes>
		<Footer />
		</>
	);
}

export default App;