const maxWord = list => {
	const listCopy = [...list];
	listCopy.sort((a, b) => a.length - b.length);
	return `"De las palabras [${list}] [${listCopy.at(-1)}] es la más larga`;
};

const FindLongestString = ({ listWords }) => {
	return <h2>{maxWord(listWords)}</h2>;
};
export default FindLongestString;
