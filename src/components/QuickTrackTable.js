import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, TableBody, TableRow } from 'material-ui/Table';
import { TableHeaderColumn, TableRowColumn, OverallColumn, CurrencyColumn } from './TableColumns';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const realCurrencies = ['GBP', 'USD'];
const cryptoCurrencies = ['BTC', 'ETH', 'LTC', 'BCH'];

class QuickTrackTable extends Component {

  static propTypes = {
    BTC: PropTypes.shape({
      GBP: PropTypes.string,
      USD: PropTypes.string,
    }),
    ETH: PropTypes.shape({
      GBP: PropTypes.string,
      USD: PropTypes.string,
    }),
    LTC: PropTypes.shape({
      GBP: PropTypes.string,
      USD: PropTypes.string,
    }),
    BCH: PropTypes.shape({
      GBP: PropTypes.string,
      USD: PropTypes.string,
    }),
  };

  state = {
    cryptoAmount: '',
    cryptoCurrency: 'BTC',
    realAmount: '',
    realCurrency: 'GBP',
  };

  handleRealAmountChange = (event, value) => this.setState({ realAmount: value});
  handleRealCurrencyChange = (event, index, value) => this.setState({ realCurrency: value});
  handleCryptoAmountChange = (event, value) => this.setState({ cryptoAmount: value});
  handleCryptoCurrencyChange = (event, index, value) => this.setState({ cryptoCurrency: value});

  render() {

    const { cryptoCurrency, realCurrency } = this.state;
    const currentSpotPrice = this.props[cryptoCurrency][realCurrency];
    const cryptoAmount = parseFloat(this.state.cryptoAmount || 0);
    const previousWorth = parseFloat(this.state.realAmount || 0);
    const currentSpotPriceHolding = currentSpotPrice * cryptoAmount;
    const currentDifference = currentSpotPriceHolding - previousWorth;

    return (
      <Table>
        <TableBody
          showRowHover={false}
          stripedRows={false}
          displayRowCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableRowColumn align="right">
              <SelectField
                style={{ width: '100px', verticalAlign: 'bottom' }}
                value={cryptoCurrency}
                onChange={this.handleCryptoCurrencyChange}
              >
                {cryptoCurrencies.map((c) => (
                  <MenuItem key={c} value={c} primaryText={c}/>
                ))}
              </SelectField>
              <TextField
                hintText="0.000000"
                hintStyle={{ right: 0 }}
                style={{ width: '100px' }}
                inputStyle={{ textAlign: 'right' }}
                onChange={this.handleCryptoAmountChange}
                value={this.state.cryptoAmount}
              />
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>Previous Worth</TableHeaderColumn>
            <TableRowColumn align="right">
              <SelectField
                style={{ width: '100px', verticalAlign: 'bottom' }}
                value={this.state.realCurrency}
                onChange={this.handleRealCurrencyChange}
              >
                {realCurrencies.map((c) => (
                  <MenuItem key={c} value={c} primaryText={c}/>
                ))}
              </SelectField>
              <TextField
                hintText="0.00"
                hintStyle={{ right: 0 }}
                style={{ width: '100px' }}
                inputStyle={{ textAlign: 'right' }}
                onChange={this.handleRealAmountChange}
                value={this.state.realAmount}
              />
            </TableRowColumn>
          </TableRow>
          {currentSpotPriceHolding &&
            <TableRow>
              <TableHeaderColumn>Current Worth</TableHeaderColumn>
              <CurrencyColumn value={currentSpotPriceHolding} currency={realCurrency} />
            </TableRow>
          }
          {previousWorth &&
            <TableRow>
              <TableHeaderColumn>Difference</TableHeaderColumn>
              <OverallColumn value={currentDifference} currency={realCurrency}/>
            </TableRow>
          }
        </TableBody>
      </Table>
    );
  }
}

export default QuickTrackTable;
