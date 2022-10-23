import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { useState } from 'react';
import styled from 'styled-components/macro';
import useSetColor from './Hooks/useSetColor';

const StyledApp = styled.div`
    background: #fff;
    height: 100vh;

    background: radial-gradient(
        circle,
        ${(props) => props.from} 10%,
        ${(props) => props.to} 100%
    );
`;

function App() {
    const [date, setDate] = useState(new Date());
    const [colorsTheme, setcolorsTheme] = useState(useSetColor());

    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];
    let monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];

    return (
        <StyledApp from={colorsTheme.from} to={colorsTheme.to}>
            <Navbar
                monthNames={monthNames}
                date={date}
                colorsTheme={colorsTheme}
            />
            <Main monthNames={monthNames} date={date} days={days} />
        </StyledApp>
    );
}

export default App;
