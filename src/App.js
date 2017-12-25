import React, {Component, Fragment} from 'react';
import Responsive from 'react-responsive';
import { FormattedRelative } from 'react-intl';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import CurrentHoldingsTable from './components/CurrentHoldingsTable';
import CurrentHoldingsTableMobile from './components/CurrentHoldingsTableMobile';
import SpotPricesTable from './components/SpotPricesTable';

import './App.css';

const Desktop = props => <Responsive {...props} minWidth={1024} />;
const Mobile = props => <Responsive {...props} maxWidth={1024} />;

class App extends Component {

  state = {
    currentHoldings: undefined,
    spotPrices: undefined,
  };

  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, process.env.REACT_APP_BACKEND_POLL_INTERVAL);
  };

  fetchData = () => fetch(process.env.REACT_APP_BACKEND_URL)
    .then(res => res.json())
    .then(({ currentHoldings, spotPrices }) => {
      this.setState({
        lastUpdated: Date.now(),
        currentHoldings,
        spotPrices,
      });
    })
    .catch(err => {
      console.log(err.message);
    });

  render() {
    const { currentHoldings, spotPrices, lastUpdated } = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          {spotPrices &&
            <Paper className="Paper">
              <AppBar
                title={
                  <Fragment>
                    Spot Prices (Last updated{' '}
                    <FormattedRelative
                      value={lastUpdated}
                      updateInterval={process.env.REACT_APP_LAST_UPDATED_INTERVAL}
                    />)
                  </Fragment>}
                showMenuIconButton={false} />
              <SpotPricesTable data={spotPrices}/>
            </Paper>
          }
          {currentHoldings &&
            <Paper className="Paper">
              <AppBar title="Current Holdings" showMenuIconButton={false} />
              <Desktop>
                <CurrentHoldingsTable data={currentHoldings}/>
              </Desktop>
              <Mobile>
                <CurrentHoldingsTableMobile data={currentHoldings}/>
              </Mobile>
            </Paper>
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
