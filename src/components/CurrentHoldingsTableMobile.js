import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

import { Table, TableBody, TableRow } from 'material-ui/Table';
import { TableHeaderColumn, TableRowColumn, OverallColumn, CurrencyColumn, CryptoCurrencyColumn } from './TableColumns';

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
      {data.map( (person, index) => (
        <Fragment key={index}>
          {index > 0 && <Divider/>}
          <AppBar title={person.who} style={styles.appBar} titleStyle={styles.appBarTitle} showMenuIconButton={false}/>
          <Table>
            <TableBody
              showRowHover={false}
              stripedRows={false}
              displayRowCheckbox={false}
            >
              <TableRow>
                <TableRowColumn />
                <TableHeaderColumn>Stake</TableHeaderColumn>
                <CurrencyColumn value={person.stake} />
              </TableRow>
              <TableRow>
                <TableHeaderColumn rowSpan={2}>BTC</TableHeaderColumn>
                <TableHeaderColumn>Holds</TableHeaderColumn>
                <CryptoCurrencyColumn value={person.btc.holds} />
              </TableRow>
              <TableRow>
                <TableHeaderColumn>Val</TableHeaderColumn>
                <CurrencyColumn value={person.btc.val} />
              </TableRow>
              <TableRow>
                <TableHeaderColumn rowSpan={2}>ETH</TableHeaderColumn>
                <TableHeaderColumn>Holds</TableHeaderColumn>
                <CryptoCurrencyColumn value={person.eth.holds} />
              </TableRow>
              <TableRow>
                <TableHeaderColumn>Val</TableHeaderColumn>
                <CurrencyColumn value={person.eth.val} />
              </TableRow>
              <TableRow>
                <TableHeaderColumn rowSpan={2}>LTC</TableHeaderColumn>
                <TableHeaderColumn>Holds</TableHeaderColumn>
                <CryptoCurrencyColumn value={person.ltc.holds} />
              </TableRow>
              <TableRow>
                <TableHeaderColumn>Val</TableHeaderColumn>
                <CurrencyColumn value={person.ltc.val} />
              </TableRow>
              <TableRow>
                <TableRowColumn />
                <TableHeaderColumn>Overall</TableHeaderColumn>
                <OverallColumn value={person.overall} />
              </TableRow>
            </TableBody>
          </Table>
        </Fragment>
      ))}
    </Fragment>
  );
};

CurrentHoldingsTableMobile.propTypes = {
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

export default CurrentHoldingsTableMobile;
