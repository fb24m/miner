import { Container } from '@/components/Container/Container.component'
import styles from './Home.module.scss'
import { MouseEvent, useState } from 'react'

const getRandomInt = (max: number): number => Math.floor(Math.random() * max)
const getRandomMinusInt = (max: number): number => +`${getRandomInt(2) === 1 ? '-' : ''}${getRandomInt(max)}`

const Home = () => {
	const [dollars, setDollars] = useState([<></>])
	//@ts-expect-error windows mutation
	const [balance, setBalance] = useState(window.Telegram.WebApp.CloudStorage.getItem('balance') ? window.Telegram.WebApp.CloudStorage.getItem('balance') : 0)

	const addDollar = (e: MouseEvent<HTMLDivElement>) => {
		setDollars([...dollars, <span style={{ top: e.clientY - getRandomInt(35), left: e.clientX + getRandomMinusInt(35) }}>+2</span>])

		if (dollars.length >= 100) {
			setDollars([])
		}

		setBalance(balance + 2)
		//@ts-expect-error windows mutation
		window.Telegram.WebApp.CloudStorage.setItem('balance', balance)
	}

	return (
		<Container>
			Баланс: {balance}
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
