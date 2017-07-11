'use strict';

import React from 'react';

function convert({kelvin, toUnit}){
	switch(toUnit.toUpperCase()){
		case 'C':
			return convertKelvinToCelsius(kelvin);
		case 'F':
			return convertKelvinToFahrenheit(kelvin);
		case 'K':
			return kelvin;
		default:
			throw new Error('Valid toUnit values are C,F,K');
	}
}

function convertKelvinToCelsius(kelvin){
	return kelvin - 273.15;
}

function convertKelvinToFahrenheit(kelvin){
	return kelvin * 9/5 - 459.67;
}

function throwIfMissing(message){
	throw new Error(message);
}

export default function TemperatureConverter({
																							 kelvin = throwIfMissing('missing kelvin prop'),
																							 toUnit = throwIfMissing('missing toUnit prop'),
																							 prefix,
																							 ...other,
																						 } = throwIfMissing('props must include kelvin and toUnit properties')){
	return <span {...other}>{prefix} {Math.round(convert({kelvin, toUnit}))}°{toUnit}</span>
}