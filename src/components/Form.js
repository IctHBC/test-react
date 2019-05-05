import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="sido" placeholder="도시..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;