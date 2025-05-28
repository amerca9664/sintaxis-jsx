const ReverseString = ({ children }) => {
	return <h2>{children.split('').reverse().join('')}</h2>;
};

export default ReverseString;
