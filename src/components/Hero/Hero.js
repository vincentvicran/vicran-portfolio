import React from 'react';

import { SectionTitle } from '../../styles/GlobalComponents';
import { HeroSection, HeroSectionText, HeroSectionSubText, HeroText } from './HeroStyles';
// import Button from '../../styles/GlobalComponents/Button';

const Hero = () => (
    <HeroSection>
        <SectionTitle>
            Namaste <br />
        </SectionTitle>
        <HeroText>It's me, Vikrant Shrestha.</HeroText>
        {/* <HeroSectionText>Explore My Personal Portfolio</HeroSectionText> */}
        <HeroSectionSubText>Welcome to my Personal Portfolio...</HeroSectionSubText>
        <a href="#about" className="button">
            <span className="span">Learn More</span>
        </a>
    </HeroSection>
);

export default Hero;

{
    /* <Button onClick={() => (window.location.href = '#about')}>Learn More</Button> */
}
