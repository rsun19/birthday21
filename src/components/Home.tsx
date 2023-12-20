import React, { useEffect } from 'react';
import birthday from '.././assets/birthday.jpg';
import { Variants, motion } from "framer-motion";
// eslint-disable-next-line
// @ts-ignore comment
import video from ".././assets/masterpiece.mp4";
import FreqQuestions from './FreqQuestions';

const Home = () => {

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };
    
        scrollToTop();
      }, []);

    interface Props {
        emoji: string;
        hueA: number;
        hueB: number;
      }
      
    const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
        }
    }
    };
    
    const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
    
    function Card({ emoji, hueA, hueB }: Props) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
    
    return (
        <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <div className="splash" style={{ background }} />
        <motion.div className="card" variants={cardVariants}>
            {emoji}
        </motion.div>
        </motion.div>
    );
    }
    
    const food: [string, number, number][] = [
    ["Trulys", 340, 10],
    ["Suju???? maybe", 20, 40],
    ["Pink Whitney", 60, 90],
    ["Alcohol", 80, 120],
    ["Alcohol", 100, 140],
    ["Alcohol", 205, 245],
    ];

    return (
        <div>
            <motion.div
            style={{ display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <div style={{
                     marginTop: '3rem',display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h3>
                        You're invited to my 21st Birthday Party! Yay!
                    </h3>
                    <h4>
                        Insert date
                    </h4>
                    <br />
                    <video autoPlay muted controls style={{ height: '50vh' }}>
                        <source src={video}
                        type="video/mp4" />
                    </video>
                    <h4>put Javkson's address here</h4>
                    <h3> Frequently Asked Questions:</h3>
                    <h3>Lineup:</h3>
                    <div>
                    {food.map(([emoji, hueA, hueB]) => (
                        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
                    ))}
                    </div>
                    <FreqQuestions />
                </div>
            </motion.div>
        </div>
    );
}

export default Home;