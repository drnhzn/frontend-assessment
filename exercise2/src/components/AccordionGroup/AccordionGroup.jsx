import React from 'react';
import './AccordionGroup.scss';
import Accordion from '../Accordion/Accordion';

const AccordionGroup = (props) => {
	let { content, currentTab, selectTab } = props;
	return (
		<div className='accordion__group'>
			{content.map((item, index) => {
				return <Accordion item={item} currentTab={currentTab} selectTab={selectTab} key={index}></Accordion>;
			})}
		</div>
	);
};

export default AccordionGroup;
