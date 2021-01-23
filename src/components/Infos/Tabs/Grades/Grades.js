import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      width: '50%',
      margin:'auto',
    },
    TableRow:{
        borderRight:"1px solid #f0f0f6",
        borderLeft:"1px solid #f0f0f6",
    }
  });
  
  function createData(Subject, Score) {
    return { Subject, Score };
  }
  
  const rows = [
    createData('Subject Name', '0.0'),
    createData('Subject Name', '0.0'),
    createData('Subject Name', '0.0'),
    createData('Subject Name', '0.0'),
    createData('Subject Name', '0.0'),
  ];
  
export default function Grades() {
    const classes = useStyles();
    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow className={classes.TableRow}>
                        <TableCell style={{color:"rgba(21, 26, 59, 0.5)"}}>Subject Name</TableCell>
                        <TableCell align="right" style={{color:"rgba(21, 26, 59, 0.5)"}}>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.Subject} className={classes.TableRow}>
                        <TableCell component="th" scope="row">
                            {row.Subject}
                        </TableCell>
                        <TableCell align="right">{row.Score}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
