import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class WeatherCard extends Component {
	render() {
		const { location, icon, current } = this.props.weather;
		const { temp_c, condition } = current;
		const iconUrl = require(`./assets/weather/icons/${icon}.png`);

		return (
			<Card className='weatherCard'>
				<Card.Content>
					<Card.Description content={`${location.region}, ${location.country}`} />
				</Card.Content>
				<Card.Content>
					<Card.Description content={condition.text} />
					<Image src={iconUrl} />
					<Card.Header>{temp_c}&deg;C</Card.Header>
				</Card.Content>
			</Card>
		)
	}
};

