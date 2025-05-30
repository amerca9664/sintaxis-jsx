import { createRoot } from 'react-dom/client';
import GenerateFullName from './generateFullName/GenerateFullName';
import WriteBookInfo from './writeBookInfo/WriteBookInfo';
import ConvertMinutesToHours from './convertMinutesToHours/ConvertMinutesToHours';
import ReverseString from './reverseString/ReverseString';
import IsEvenOrOdd from './isEvenOrOdd/IsEvenOrOdd';
import UppercaseText from './uppercaseText/UppercaseText';
import WriteGreeting from './writeGreeting/WriteGreeting';
import CalculatePower from './calculatePower/CalculatePower';
import CountWords from './countWords/CountWords';
import CalculateAge from './calculateAge/CalculateAge';
import FindMaximum from './findMaximum/FindMaximum';

const container = document.getElementById('root');

createRoot(container).render(
	<>
		<GenerateFullName nombre='PEPE' apellido='estrada' />
		<WriteBookInfo
			title='Pedro Paramo'
			author='Juan Rulfo'
			year={1995}
			genre='Novela'
		/>
		<ConvertMinutesToHours minutes={160} />
		<ReverseString>HOLA</ReverseString>
		<IsEvenOrOdd number={6} />
		<UppercaseText>mayusculas</UppercaseText>
		<WriteGreeting nombre='Pedro' hora='11:00' />
		<CalculatePower number={4} exp={3} />
		<CountWords words='hola mi mundo' />
		<CalculateAge fecha='1996-01-10' />
		<FindMaximum listNum={[5, 9, 52, 1, 3, 7]} />
	</>
);
