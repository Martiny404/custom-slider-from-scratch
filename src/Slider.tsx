import React, { FC, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Thumb from './static/Thumb';

export interface ISliderItem {
	id: number;
	imgPath: string;
}

const Slider: FC<{ images: ISliderItem[] }> = ({ images }) => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState('slide-right');

	// const slideLeft = () => {
	// 	const nextIndex = index - 1;
	// 	if (nextIndex < 0) {
	// 		setIndex(images.length - 1);
	// 	} else {
	// 		setIndex(nextIndex);
	// 	}
	// 	setDirection('slide-left');
	// };

	// const slideRight = () => {
	// 	setIndex((index + 1) % images.length);
	// 	setDirection('slide-right');
	// };

	const childFactory = (direction: string) => (child: any) =>
		React.cloneElement(child, {
			classNames: direction,
		});

	return (
		<div className='slider-wrapper'>
			<div className='image-slider'>
				{/* <button onClick={slideLeft}>{'<'}</button> */}
				<div className='image-wrapper'>
					<TransitionGroup childFactory={childFactory(direction)}>
						<CSSTransition
							key={images[index].id}
							timeout={400}
							classNames={direction}
						>
							<img alt='' src={images[index].imgPath} />
						</CSSTransition>
					</TransitionGroup>
				</div>
				{/* <button onClick={slideRight}>{'>'}</button> */}
			</div>
			<Thumb
				images={images}
				index={index}
				setDirection={setDirection}
				setIndex={setIndex}
			/>
		</div>
	);
};
export default Slider;
