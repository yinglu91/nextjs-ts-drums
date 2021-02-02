import { useState } from 'react'
import Head from 'next/head'
import Drum from '../components/Drum'
import { drumTypes } from '../data/drumTypes'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  const [drums] = useState(drumTypes)

  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound)
    audio.play()
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS Drum Machine</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <div className={styles.main}>
        {drums.map(drum => (
          <Drum
            key={drum.type}
            drumType={drum.type}
            onClick={() => handlePlayDrum(drum.sound)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
