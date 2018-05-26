import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loader, Card } from 'semantic-ui-react';

import { getWeather } from '../actions';
import WeatherCard from '../components/WeatherCard';
class DashboardContainer extends Component {

	componentWillMount() {
		this.fetchWeatherBasedOnCurrentLocation();
	}

	fetchWeatherBasedOnCurrentLocation() {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				this.props.getWeather(latitude, longitude);
			});
		} else {
			this.props.getWeather(3.17, 101.7);
		}

		//setTimeout(() => { this.fetchWeatherBasedOnCurrentLocation(); }, 10000);
	}

	render() {
		const { isFetching, weather } = this.props;

		return (
			<div style={{ marginTop: '2em', minHeight: '50em' }}>
				<Loader active={isFetching} />
				<Card.Group centered>
					{weather && <WeatherCard weather={weather} />}
				</Card.Group>
			</div>
		);
	}
}

const mapStateToProps = ({ dashboard }) => ({
	isFetching: dashboard.isFetching,
	weather: dashboard.weather
});

export default connect(
	mapStateToProps,
	{ getWeather }
)(DashboardContainer);