import React, { useState } from "react";
import Poster1 from "./Poster1";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";



function Poster() {
  const [value, setValue] = useState(0)
  return (
	<>
		<button
			onClick={() => {
				setValue(value%3+1);
				console.log(value)
			}}
		>
			sad
		</button>
		{value == 1 ? <Poster1 /> : value== 2 ? <Poster2 /> : <Poster3/>}
	</>
  )
}

export default Poster;
