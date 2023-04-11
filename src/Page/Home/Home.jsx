import React from 'react';
import { HomeBox, HomeDescr, HomeImg } from './Home.styled';
import Phonbook from '../../Utills/Phonbook.jpg';

const Home = () => {
  return (
    <HomeBox>
      <HomeImg src={Phonbook} alt="img" />
      <HomeDescr>
        We offer an easy-to-use program for storing the phone numbers of your
        contacts. To start using it, simply register and save the necessary
        numbers, which will always be at hand, because it is convenient both on
        a computer and on a mobile phone. You can see more of my works at
        GitHab:
        <a target="blank" href="https://github.com/VladDyadenko">
          Vladimir Dyadenko
        </a>
      </HomeDescr>
    </HomeBox>
  );
};

export default Home;
