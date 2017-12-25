import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableRow } from 'material-ui/Table';
import { TableHeaderColumn, TableRowColumn, OverallColumn, CurrencyColumn, CryptoCurrencyColumn } from './TableColumns';

const cryptoCurrencies = ['BTC', 'ETH', 'LTC'];

const CurrentHoldingsTable = ({data}) => {
  return (
    <Table selectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn colSpan="2" />
          {cryptoCurrencies.map(c =>
            <TableHeaderColumn key={c} align="center" colSpan="2">{c}</TableHeaderColumn>
          )}
          <TableHeaderColumn align="center" colSpan="2">Combined</TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn>Who</TableHeaderColumn>
          <TableHeaderColumn align="right">Stake</TableHeaderColumn>
          {cryptoCurrencies.map(c =>
            <Fragment key={c}>
              <TableHeaderColumn align="right">Holds</TableHeaderColumn>
              <TableHeaderColumn align="right">Val</TableHeaderColumn>
            </Fragment>
          )}
          <TableHeaderColumn align="right">Total</TableHeaderColumn>
          <TableHeaderColumn align="right">Overall</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={false}
        stripedRows={false}
        displayRowCheckbox={false}
      >
        {Object.keys(data).map((person, index) => {
          const { overallProfit, depositedValue, ...currencyData } = data[person];
          return (
            <TableRow key={index}>
              <TableRowColumn bold={true}>{person}</TableRowColumn>
              <CurrencyColumn value={depositedValue}/>
              {cryptoCurrencies.map(c =>
                <Fragment key={c}>
                  <CryptoCurrencyColumn value={currencyData[c].holds}/>
                  <CurrencyColumn value={currencyData[c].valueGBP}/>
                </Fragment>
              )}
              <CurrencyColumn bold={true} value={cryptoCurrencies.reduce((total, c) => total + data[person][c].valueGBP, 0)}/>
              <OverallColumn value={overallProfit}/>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  );
};

CurrentHoldingsTable.propTypes = {
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

export default CurrentHoldingsTable;
