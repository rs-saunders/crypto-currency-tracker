import React from 'react';
import PropTypes from 'prop-types';

import { Table, TableBody, TableHeader, TableRow } from 'material-ui/Table';
import { TableHeaderColumn, CurrencyColumn } from './TableColumns';

const realCurrencies = ['GBP', 'USD'];
const cryptoCurrencies = ['BTC', 'ETH', 'LTC', 'BCH'];

const SpotPricesTable = ({data}) => {
  return (
    <Table selectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Currency</TableHeaderColumn>
          {realCurrencies.map((j) => (
            <TableHeaderColumn align="right">{j} Value</TableHeaderColumn>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={false}
        stripedRows={false}
        displayRowCheckbox={false}
      >
        {cryptoCurrencies.map((i) => (
          <TableRow key={i}>
            <TableHeaderColumn>{i}</TableHeaderColumn>
            {realCurrencies.map((j) => (
              <CurrencyColumn key={j} value={data[i][j]} currency={j} />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

SpotPricesTable.propTypes = PropTypes.shape({
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
});

export default SpotPricesTable;
