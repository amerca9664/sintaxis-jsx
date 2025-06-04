const selectMax = list => {
	list.sort((a, b) => a - b);
	const stringList = String(list);
	const max = list.at(-1);
	return `El número más alto de la lista [${stringList}] es [${max}]`;
};

const FindMaximum = ({ listNum }) => {
	return <h2>{selectMax(listNum)}</h2>;
};
export default FindMaximum;
