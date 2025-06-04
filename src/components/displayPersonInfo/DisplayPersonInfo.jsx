const DisplayPersonInfo = ({ persona: { nombre, edad, ocupacion } }) => {
	return (
		<h2>
			Hola {nombre} tienes {edad} y eres {ocupacion}
		</h2>
	);
};

export default DisplayPersonInfo;
