import React, { useState } from "react";
import Poster1 from "./Poster1";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";
import styles from "../../styles/Home.module.css";


function Poster() {
  const [value, setValue] = useState(0)
  return (
	<section className={styles.home}>
		<div className={styles.changeRight}
			onClick={() => {
				setValue(value%3+1);
				console.log(value)
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="5 0 16 16">
				<path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
			</svg>
		</div>
		{value == 1 ? <Poster1 /> : value== 2 ? <Poster2 /> : <Poster3/>}
		<div className={styles.changeLeft}
			onClick={() => {
				setValue((value%3+2)%3);
				console.log(value)
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 6 16">
				<path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
			</svg>
		</div>
	</section>
  )
}

export default Poster;
