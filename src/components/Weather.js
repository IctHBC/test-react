import React from "react";

const Weather = props => (
	<div className="fine_dust__info">
	 {	
	 	props.sido && <p className="fine_dust__key"> Location: 
	 		<span className="fine_dust__value"> { props.sido }</span>
	 	</p> 
	 }
	 { 	
	 	props.stationName && <p className="fine_dust__key"> Stationname: 
	 		<span className="fine_dust__value"> { props.stationName } </span>
	 </p> 
	 }
	 { 	
	 	props.pm10 && <p className="fine_dust__key"> PM10: 
	 		<span className="fine_dust__value"> { props.pm10 }	</span>
	 	</p> 
	 }
	 { 	
	 	props.pm25 && <p className="fine_dust__key"> PM25: 
	 		<span className="fine_dust__value"> { props.pm25 } </span>
	 	</p> 
	 }
	 { 
	 	props.error && <p className="fine_dust__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;