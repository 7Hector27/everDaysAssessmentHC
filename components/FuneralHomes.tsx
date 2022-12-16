import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FuneralHomeCard from './FuneralHomeCard';
import styles from '../styles/index.module.scss';
const FuneralHomes = () => {
  interface funeralState {
    funeralSlice: { funeralData: [] };
  }

  const funeralData = useSelector(
    (state: funeralState) => state.funeralSlice.funeralData
  );

  const [funeralHomes, setFuneralHomes] = useState([]);

  const getFuneralData = () => {
    setFuneralHomes(funeralData);
  };

  useEffect(() => {
    getFuneralData();
  }, [funeralData]);

  return (
    <div className={styles.funeralCards}>
      {funeralHomes?.map((home) => {
        const { name, address, profileImage, _id } = home;
        return (
          <FuneralHomeCard
            key={_id}
            name={name}
            address={address}
            profileImage={profileImage}
          />
        );
      })}
    </div>
  );
};

export default FuneralHomes;
