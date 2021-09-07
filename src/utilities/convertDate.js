const convertDate = (input) => {
	const date = input.getDate();
	const day = input.toLocaleString('en-US', { weekday: 'short' });
	const year = input.getFullYear();
	const month = input.toLocaleString('en-US', { month: 'short' });

	const result = `${day},   ${date} ${month} ${year}`;

	return result;
};
export default convertDate;
