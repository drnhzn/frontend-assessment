import axios from 'axios';

export const getAccordionContent = () => {
	return new Promise(async (resolve, reject) => {
		try {
			let result = await axios.get('./data.json');
			resolve(result.data || []);
		} catch (e) {
			reject(e);
		}
	});
};

export default getAccordionContent;
