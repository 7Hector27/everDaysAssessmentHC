import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setFuneralData } from '../redux/funeralSlice';
import FuneralHomes from '../components/FuneralHomes';
const Home = () => {
  const dispatch = useDispatch();
  const [atTop, setAtTop] = useState(false);
  const dispatchData = async () => {
    const res = await axios.get(
      'https://dev.everdays.com/v2/public/providers?state=mi'
    );
    dispatch(setFuneralData(res.data.data.homes));
  };
  useEffect(() => {
    dispatchData();
  }, []);

  // Checks if we're at top of page
  global.onscroll = function () {
    if (window.pageYOffset === 0) {
      setAtTop(true);
    } else {
      setAtTop(false);
    }
  };

  return (
    <div className={styles.HomeContainer}>
      <div className={atTop ? styles.Header : styles.HeaderBgWht}>
        <Image
          priority={true}
          alt='Everdays_Header'
          src='/images/new-logo-2022.png'
          width={262}
          height={60}
        ></Image>
      </div>

      <div className={styles.FuneralHomesContainer}>
        <FuneralHomes />
      </div>
    </div>
  );
};
export default Home;
