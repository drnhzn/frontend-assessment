import React from 'react';
import './Accordion.scss';
import { FiChevronDown } from 'react-icons/fi';

const Accordion = (props) => {
	let { selectTab, currentTab, item } = props;
	let { title, content } = item;

	const createMarkup = () => {
		return { __html: content };
	};
	return (
		<div className={`accordion ${title === currentTab ? '__active' : ''}`}>
			<div className='accordion__head' onClick={() => selectTab(title)}>
				<h1>{title}</h1>
				<FiChevronDown></FiChevronDown>
			</div>
			<div className='accordion__body' dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
};

export default Accordion;
