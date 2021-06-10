import React, { Component } from 'react';
import './App.scss';
import { getAccordionContent } from './services/accordionServices';
import AccordionGroup from './components/AccordionGroup/AccordionGroup';

class App extends Component {
	state = { content: [], currentTab: '' };
	componentDidMount() {
		getAccordionContent().then((res) => {
			this.setState({
				content: res,
				currentTab: res.length ? res[0].title : '',
			});
		});
	}

	selectTab = (tab) => {
		this.setState({
			currentTab: tab,
		});
	};

	render() {
		let { content, currentTab } = this.state;
		return (
			<div className='App'>
				<div className='container'>
					<nav className='accordion__nav'>
						<ul>
							{content.map((item, index) => (
								<li className={`nav__link ${item.title === currentTab ? '__active' : ''}`} onClick={() => this.selectTab(item.title)} key={index}>
									{item.title}
								</li>
							))}
						</ul>
					</nav>
					<AccordionGroup content={content} currentTab={currentTab} selectTab={this.selectTab}></AccordionGroup>
				</div>
			</div>
		);
	}
}

export default App;
