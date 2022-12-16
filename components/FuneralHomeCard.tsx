import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.scss';
const FuneralHomeCard = ({
  name,
  address,
  profileImage,
}: {
  name: string;
  address: {
    zip: string;
    state: string;
    city: string;
    street: string;
  };
  profileImage: string;
}) => {
  const { street, city, state, zip } = address;
  return (
    <div className={styles.funeralHomeCard}>
      <div className={styles.funeralHomeCardName}>{name}</div>

      <div className={styles.funeralHomeCardDetails}>
        <div className={styles.funeralHomeImgContainer}>
          <Image
            alt='FuneralHomeImage'
            width={100}
            height={100}
            src={
              profileImage ? profileImage : 'https://i.imgur.com/WQupsFH.png'
            }
          ></Image>
        </div>
        <div className={styles.funeralHomeCardAddress}>
          <div>{street}</div>
          <div>
            {city}, {state} {zip}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralHomeCard;
