import { FC } from 'react';
import { ISliderItem } from '../Slider';

interface IThumb {
	images: ISliderItem[];
	setIndex: (idx: number) => void;
	setDirection: (direction: string) => void;
	index: number;
}

const Thumb: FC<IThumb> = ({ images, setDirection, setIndex, index }) => {
	const setSlide = (idx: number) => {
		if (idx > index) {
			setDirection('slide-right');
			setIndex(idx);
		} else {
			setDirection('slide-left');
			setIndex(idx);
		}
	};

	if (images.length) {
		return (
			<ul className='thumbnails'>
				{images.map((item, i) => (
					<li
						className={i === index ? 'active' : ''}
						onClick={() => setSlide(i)}
						key={item.id}
					>
						<img src={item.imgPath} alt='thumb' draggable={false} />
					</li>
				))}
			</ul>
		);
	}
	return null;
};

export default Thumb;
