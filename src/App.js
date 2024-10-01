import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
    display: 'block', 
  },
  table: {
    minWidth: 1080, 
  },
};

const customers = [
  {
    id: 1,
    image: 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
    name: 'kico1',
    birthday: '961111',
    gender: 'man',
    job: 'college',
  },
  {
    id: 2,
    image: 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
    name: 'kico2',
    birthday: '971111',
    gender: 'woman',
    job: 'college',
  },
  {
    id: 3,
    image: 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
    name: 'kico3',
    birthday: '981111',
    gender: '?',
    job: 'college',
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>番号</TableCell>
              <TableCell>image</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>誕生日</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>職業</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
