import React from 'react';
import { FormattedNumber } from 'react-intl';
import { lightGreen50, red50 } from 'material-ui/styles/colors';

import {
  TableHeaderColumn as MuiTableHeaderColumn,
  TableRowColumn as MuiTableRowColumn,
} from 'material-ui/Table';

export const TableHeaderColumn = ({align, ...props}) => <MuiTableHeaderColumn {...props} style={align ? {textAlign: align } : {}} />;
export const TableRowColumn = ({align, bold, style, ...props}) => {
  const extraStyles = {};
  if (align) { extraStyles.textAlign = align; }
  if (bold) {
    extraStyles.fontWeight = 'bold';
    extraStyles.fontSize = '1.05em';
  }
  return <MuiTableRowColumn {...props} style={{...extraStyles, ...style}} />;
};

/* eslint-disable react/style-prop-object */
export const CurrencyColumn = ({value, currency="GBP"}) => (
  <TableRowColumn align="right">
    <FormattedNumber value={value} style="currency" currency={currency}/>
  </TableRowColumn>
);

export const CryptoCurrencyColumn = ({value}) => (
  <TableRowColumn align="right">
    <FormattedNumber value={value} minimumFractionDigits={8} />
  </TableRowColumn>
);

export const OverallColumn = ({value}) => {

  const styles = {
    green: {
      backgroundColor: lightGreen50,
    },
    red: {
      backgroundColor: red50,
    }
  };

  return (
    <TableRowColumn align="right" bold={true} style={value < 0 ? styles.red : styles.green}>
      <FormattedNumber value={value} style="currency" currency="GBP"/>
    </TableRowColumn>
  );
};
