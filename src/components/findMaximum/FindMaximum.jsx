const FindMaximum = ({ listNum }) => {
	listNum.sort((a, b) => a - b);

	return (
		<h2>
			<ul>
				{listNum.map((element, index) => (
					<li key={index}>{element}</li>
				))}
			</ul>
		</h2>
	);
};
export default FindMaximum;
