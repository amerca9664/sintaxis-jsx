const checkHour = hour => {
	const hourFormat = Number(hour.split(':')[0]);
	console.log(hourFormat);
	if (12 <= hourFormat && hourFormat <= 19) {
		console.log('Buenas tardes');
		return 'Buenas tardes';
	} else if (0 <= hourFormat && hourFormat < 12) {
		console.log('Buenos dias');
		return 'Buenos dias';
	} else {
		console.log('Buenas noches');
		return 'Buenas noches';
	}
};

const WriteGreeting = ({ nombre, hora }) => {
	const saludos = checkHour(hora);
	return (
		<h2>
			{saludos}, {nombre}
		</h2>
	);
};

export default WriteGreeting;
