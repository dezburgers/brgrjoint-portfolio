
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSpring, useTransition, animated, config, easings } from 'react-spring';

import styles from './noise.styles.module.css'




export default function App() {
    const { value } = useSpring({
        from: {
            value: 0,
        },
        to: {
            value: 1,
        },
        loop: true,
        config: {
            duration: 100,
            easing: easings.steps(10, 'start'),
        },
    })

    return (
        <div className={styles.container}>
            <animated.div
                style={{
                    x: value.to({
                        output: ['0%', '-5%', '-15%', '7%', '-5%', '-15%', '15%', '0%', '3%', '-10%'],
                    }),
                    y: value.to({
                        output: ['0%', '-10%', '5%', '-25%', '25%', '10%', '0%', '15%', '35%', '10%'],
                    }),
                }}
                className={styles.noise}
            />
        </div>
    )
}