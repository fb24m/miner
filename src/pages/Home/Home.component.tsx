import { Container } from '@/components/Container/Container.component'
import styles from './Home.module.scss'
import { MouseEvent, useState } from 'react'

const Home = () => {
	const [dollars, setDollars] = useState([<></>])

	const addDollar = (e: MouseEvent<HTMLDivElement>) => {
		setDollars([...dollars, <span style={{ top: e.clientY, left: e.clientX }}>+1</span>])

		if (dollars.length >= 100) {
			setDollars([])
		}
	}

	return (
		<Container>
			<div className={styles.grid}>
				<div className={styles.el}>ур.1</div>
				<div className={styles.el}>ур.6</div>
				<div className={styles.el}>ур.9</div>
				<div className={styles.el}>ур.4</div>
				<div className={`${styles.add} ${styles.el}`}>+</div>
				<div className={`${styles.add} ${styles.el}`}>+</div>
				<div className={`${styles.add} ${styles.el}`}>+</div>
				<div className={`${styles.add} ${styles.el}`}>+</div>
				<div className={`${styles.add} ${styles.el}`}>+</div>
			</div>
			<div className={styles.coinContainer}>
				<div className={styles.dollars}>
					{dollars}
				</div>
				<div className={styles.coin} onClick={(e) => { addDollar(e) }}>
					<span>$</span>
				</div>
			</div>
		</Container>
	)
}

export default Home
