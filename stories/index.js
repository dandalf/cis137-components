import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TemperatureConverter from '../components/TemperatureConverter';
import './sample.css';

storiesOf('TemperatureConverter', module)
  .add('300 Kelvin to Fahrenheit', () => (
    <TemperatureConverter kelvin="300" toUnit="F"/>
  ))
  .add('300 Kelvin to Celsius', ()=>(
    <TemperatureConverter kelvin="300" toUnit="C"/>
  ))
  .add('with prefix', () =>(
    <TemperatureConverter kelvin="300" toUnit="F" prefix="The temperature is "/>
  ))
	.add('with custom class', () =>(
    <TemperatureConverter kelvin="300" toUnit="F" className="temperature-sample"/>
	))
;
