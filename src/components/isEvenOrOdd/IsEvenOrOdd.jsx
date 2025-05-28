const IsEvenOrOdd = ({ number }) => {
	return (
		<h2>
			El número {number} es {number % 2 === 0 ? 'par' : 'impar'}
		</h2>
	);
};

export default IsEvenOrOdd;
