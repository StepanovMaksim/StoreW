import React from 'react'

import styles from '../../styles/Home.module.css'

import BG from '../../images/sneakers.png'
import { Link } from 'react-router-dom'

const Poster3 = () => (
	<>
		<div className={styles.title}>BIG SALE 20%</div>
		<div className={styles.product}>
			<div className={styles.text}>
				<div className={styles.subtitle}>the bestseller of 2023</div>
				<h1 className={styles.head}>SuperStep <br/> just jump </h1>
				<Link to={`/categories/4`}>
					<button className={styles.button}>Shop Now</button>
				</Link>
			</div>
			<div className={styles.image}>
				<img src={BG} alt='' />
			</div>
		</div>
	</>
)

export default Poster3
