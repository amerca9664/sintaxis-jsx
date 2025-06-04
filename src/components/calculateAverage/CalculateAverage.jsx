const media = list => {
	const suma = list.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	);
	const media = (suma / list.length).toFixed(2);
	return `"La media de los números [${list}] es [${media}]`;
};

const CalculateAverage = ({ listNumMed }) => {
	return <h2>{media(listNumMed)}</h2>;
};
export default CalculateAverage;
