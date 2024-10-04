import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';

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
  progress:{
  }
};

class App extends Component {

  state ={
    customers:"",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch(`api/customers`);
    const body = await response.json();
    return body;
  }

  progress = () =>{
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>番号</TableCell>
              <TableCell>図</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>誕生日</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>職業</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )): 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}></CircularProgress>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
