import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

import { Table, TableBody, TableRow } from 'material-ui/Table';
import { TableHeaderColumn, TableRowColumn, OverallColumn, CurrencyColumn, CryptoCurrencyColumn } from './TableColumns';

const cryptoCurrencies = ['BTC', 'ETH', 'LTC'];

const styles = {
  appBar: {
    backgroundColor: '#efefef',
  },
  appBarTitle: {
    color: 'rgba(0, 0, 0, 0.4)',
  },
};

const CurrentHoldingsTableMobile = ({data}) => {
  return (
    <Fragment>
      {Object.keys(data).map((person, index) => {
        const { overallProfit, depositedValue, ...currencyData } = data[person];
        return (
          <Fragment key={index}>
            {index > 0 && <Divider/>}
            <AppBar title={person} style={styles.appBar} titleStyle={styles.appBarTitle} showMenuIconButton={false}/>
            <Table>
              <TableBody
                showRowHover={false}
                stripedRows={false}
                displayRowCheckbox={false}
              >
                <TableRow>
                  <TableRowColumn />
                  <TableHeaderColumn>Stake</TableHeaderColumn>
                  <CurrencyColumn value={depositedValue} />
                </TableRow>
                {cryptoCurrencies.map(c =>
                  <Fragment key={c}>
                    <TableRow>
                      <TableHeaderColumn rowSpan={2}>{c}</TableHeaderColumn>
                      <TableHeaderColumn>Holds</TableHeaderColumn>
                      <CryptoCurrencyColumn value={currencyData[c].holds} />
                    </TableRow>
                    <TableRow>
                      <TableHeaderColumn>Val</TableHeaderColumn>
                      <CurrencyColumn value={currencyData[c].valueGBP} />
                    </TableRow>
                  </Fragment>
                )}
                <TableRow>
                  <TableRowColumn />
                  <TableHeaderColumn>Overall</TableHeaderColumn>
                  <OverallColumn value={overallProfit} />
                </TableRow>
              </TableBody>
            </Table>
          </Fragment>
        )
      })}
    </Fragment>
  );
};

CurrentHoldingsTableMobile.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      depositedValue: PropTypes.number,
      overallProfit: PropTypes.number,
      BTC: PropTypes.shape({
        holds: PropTypes.number,
        valueGBP: PropTypes.number,
      }),
      ETH: PropTypes.shape({
        holds: PropTypes.number,
        valueGBP: PropTypes.number,
      }),
      LTC: PropTypes.shape({
        holds: PropTypes.number,
        valueGBP: PropTypes.number,
      }),
    }),
  ),
};

export default CurrentHoldingsTableMobile;
