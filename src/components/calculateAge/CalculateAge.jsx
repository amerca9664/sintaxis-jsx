const subDate = birthday => {
	const birthdayFormat = new Date(birthday);
	const actDate = new Date();
	const age = actDate.getFullYear() - birthdayFormat.getFullYear();

	return age;
};
const CalculateAge = ({ fecha }) => {
	return (
		<h2>
			Si naciste el día {fecha} tienes {subDate(fecha)} años.
		</h2>
	);
};

export default CalculateAge;
