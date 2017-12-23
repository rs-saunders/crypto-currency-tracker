import React from 'react';
import PropTypes from 'prop-types';

import { Table, TableBody, TableHeader, TableRow } from 'material-ui/Table';
import { TableHeaderColumn, CurrencyColumn } from './TableColumns';

const SpotPricesTable = ({data}) => {
  return (
    <Table selectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Currency</TableHeaderColumn>
          <TableHeaderColumn align="right">GBP Value</TableHeaderColumn>
          <TableHeaderColumn align="right">USD Value</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={false}
        stripedRows={false}
        displayRowCheckbox={false}
      >
        {[
          ['BTC', data.btc],
          ['ETH', data.eth],
          ['LTC', data.ltc],
          ['BCH', data.bch],
        ].map(([label, price]) => (
          <TableRow key={label}>
            <TableHeaderColumn>{label}</TableHeaderColumn>
            <CurrencyColumn value={price.gbp} />
            <CurrencyColumn value={price.usd} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

SpotPricesTable.propTypes = PropTypes.shape({
  btc: PropTypes.shape({
    gbp: PropTypes.string,
    usd: PropTypes.string,
  }),
  eth: PropTypes.shape({
    gbp: PropTypes.string,
    usd: PropTypes.string,
  }),
  ltc: PropTypes.shape({
    gbp: PropTypes.string,
    usd: PropTypes.string,
  }),
  bch: PropTypes.shape({
    gbp: PropTypes.string,
    usd: PropTypes.string,
  }),
});

export default SpotPricesTable;
