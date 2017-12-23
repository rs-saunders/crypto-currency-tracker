import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableRow } from 'material-ui/Table';
import { TableHeaderColumn, TableRowColumn, OverallColumn, CurrencyColumn, CryptoCurrencyColumn } from './TableColumns';

const CurrentHoldingsTable = ({data}) => {
  return (
    <Table selectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn colSpan="2" />
          <TableHeaderColumn align="center" colSpan="2" tooltip="Bitcoin">
            BTC
          </TableHeaderColumn>
          <TableHeaderColumn align="center" colSpan="2" tooltip="Ethereum">
            ETH
          </TableHeaderColumn>
          <TableHeaderColumn align="center" colSpan="2" tooltip="Litecoin">
            LTC
          </TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
        <TableRow>
          <TableHeaderColumn>Who</TableHeaderColumn>
          <TableHeaderColumn align="right">Stake</TableHeaderColumn>
          <TableHeaderColumn align="right">Holds</TableHeaderColumn>
          <TableHeaderColumn align="right">Val</TableHeaderColumn>
          <TableHeaderColumn align="right">Holds</TableHeaderColumn>
          <TableHeaderColumn align="right">Val</TableHeaderColumn>
          <TableHeaderColumn align="right">Holds</TableHeaderColumn>
          <TableHeaderColumn align="right">Val</TableHeaderColumn>
          <TableHeaderColumn align="right">Overall</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={false}
        stripedRows={false}
        displayRowCheckbox={false}
      >
        {data.map( (row, index) => (
          <TableRow key={index}>
            <TableRowColumn bold={true}>{row.who}</TableRowColumn>
            <CurrencyColumn value={row.stake} />
            <CryptoCurrencyColumn value={row.btc.holds} />
            <CurrencyColumn value={row.btc.val} />
            <CryptoCurrencyColumn value={row.eth.holds} />
            <CurrencyColumn value={row.eth.val} />
            <CryptoCurrencyColumn value={row.ltc.holds} />
            <CurrencyColumn value={row.ltc.val} />
            <OverallColumn value={row.overall} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

CurrentHoldingsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      who: PropTypes.string,
      stake: PropTypes.number,
      overall: PropTypes.number,
      btc: PropTypes.shape({
        holds: PropTypes.number,
        val: PropTypes.number,
      }),
      eth: PropTypes.shape({
        holds: PropTypes.number,
        val: PropTypes.number,
      }),
      ltc: PropTypes.shape({
        holds: PropTypes.number,
        val: PropTypes.number,
      }),
    }),
  ),
};

export default CurrentHoldingsTable;
