const selectMax = ({ list }) => {
	list.sort((a, b) => a - b);
	const stringList = String(list);
	return stringList;
};

const FindMaximum = ({ listNum }) => {
	return <h2>{selectMax(listNum)}</h2>;
};
export default FindMaximum;
