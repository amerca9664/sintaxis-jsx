const MinsDivisor = mins => {
	const hour = Math.floor(mins / 60);
	const minResidue = mins % 60;
	return `${mins} minutos son ${hour} ${hour > 1 ? 'horas' : 'hora'} y ${minResidue} minutos`;
};

const ConvertMinutesToHours = ({ minutes }) => {
	const stringHours = MinsDivisor(minutes);

	return <h2>{stringHours}</h2>;
};

export default ConvertMinutesToHours;
