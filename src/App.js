import React, {Component} from 'react';
import Responsive from 'react-responsive';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import CurrentHoldingsTable from './components/CurrentHoldingsTable';
import CurrentHoldingsTableMobile from './components/CurrentHoldingsTableMobile';
import SpotPricesTable from './components/SpotPricesTable';

import { spotPriceData, currentHoldingsData } from './data';
import exampleData from './data/example';

import './App.css';

const Desktop = props => <Responsive {...props} minWidth={1024} />;
const Mobile = props => <Responsive {...props} maxWidth={1024} />;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Paper className="Paper">
            <AppBar title="Spot Prices" showMenuIconButton={false} />
            <SpotPricesTable data={exampleData.spotPrices} />
          </Paper>
          <Paper className="Paper">
            <AppBar title="Current Holdings" showMenuIconButton={false} />
            <Desktop>
              <CurrentHoldingsTable data={currentHoldingsData} />
            </Desktop>
            <Mobile>
              <CurrentHoldingsTableMobile data={currentHoldingsData} />
            </Mobile>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
