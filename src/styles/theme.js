import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

import { BsSnow } from 'react-icons/bs';
import { GiLawStar } from 'react-icons/gi';

import star from '../themes/star';
import snow from '../themes/snow';
import GlobalStyles, { Toggle, ThemeDiv, Text } from './globals';

import ParticleComponent from '../utils/Particles/ParticleComponent';

const Theme = ({ children }) => {
    const [theme, setTheme] = useState('snow');

    const toggleTheme = () => {
        theme === 'snow' ? setTheme('star') : setTheme('snow');
    };

    return (
        <ThemeProvider theme={theme === 'snow' ? snow : star}>
            <ParticleComponent theme={theme} />
            <GlobalStyles />
            {children}
            <Toggle onClick={toggleTheme}>
                {theme === 'snow' ? (
                    <ThemeDiv>
                        <Text>Snow</Text>
                        <i className="icon">
                            <BsSnow className="bounce" />
                        </i>
                    </ThemeDiv>
                ) : (
                    <ThemeDiv>
                        <Text>Star</Text>
                        <i className="icon">
                            <GiLawStar className="bounce" />
                        </i>
                    </ThemeDiv>
                )}
            </Toggle>
        </ThemeProvider>
    );
};

export default Theme;
