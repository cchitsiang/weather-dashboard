import React, { Component } from 'react';
import { Route } from 'react-router';
import { Container, Grid } from 'semantic-ui-react';

import DashboardContainer from './containers/DashboardContainer';

export default class App extends Component {
	render() {
		return (
			<Container textAlign="center">
				<Route exact path="/" render={
					props =>
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<DashboardContainer />
								</Grid.Column>
							</Grid.Row>
						</Grid>
				} />
			</Container>
		);
	}
}