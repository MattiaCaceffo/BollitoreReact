import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TemperatureInput from "./TemperatureInput"

/*
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
    k: "Kelvin"
};
*/

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function toKelvin(celsius) {
    return (celsius - 273.15);
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class CalculatorDue extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleKelvinChange = this.handleCelsiusChange.bind(this);

        this.state = {temperature: '',
        scale:"c"};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    handleKelvinChange(temperature) {
        this.setState({scale: 'k', temperature});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        const kelvin = tryConvert(celsius, toKelvin) ;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <TemperatureInput
                    scale="k"
                    temperature={kelvin}
                    onTemperatureChange={this.handleKelvinChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />

            </div>
        );
    }
}

export default CalculatorDue;