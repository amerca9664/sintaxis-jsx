const CountWords = ({ words }) => {
	const listWords = words.split(' ');
	return (
		<h2>
			En la frase "{words} hay {listWords.length}" palabras.
		</h2>
	);
};

export default CountWords;
