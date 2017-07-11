# CIS-137 Components

Currently 1 component you will use in CIS-137.

## TemperatureConverter

Converts kelvin temperatures to Celsius or Fahrenheit.

Import with:

    import {TemperatureConverter} from 'cis137-components';

Example usage (more can be found in stories/index.js)

Convert 300 kelvin to Fahrenheit

    <TemperatureConverter kelvin="300" toUnit="F"/>

Convert 300 kelvin to Celsius

    <TemperatureConverter kelvin="300" toUnit="C"/>


Can run storybook with:
    
    yarn run storybook
    
