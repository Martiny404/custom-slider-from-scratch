import './App.css';
import Slider from './Slider';
import image1 from './static/imac24-1.jpeg';
import image2 from './static/imac24-2.jpeg';
import image3 from './static/imac24-3.jpeg';
import image4 from './static/imac24-4.jpeg';
import image5 from './static/imac24-5.jpeg';
import image6 from './static/imac24-6.jpeg';

const images = [
	{ id: 1, imgPath: image1 },
	{ id: 2, imgPath: image2 },
	{ id: 3, imgPath: image3 },
	{ id: 4, imgPath: image4 },
	{ id: 5, imgPath: image5 },
	{ id: 6, imgPath: image6 },
];

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Slider images={images} />
			</div>
		</div>
	);
}

export default App;
