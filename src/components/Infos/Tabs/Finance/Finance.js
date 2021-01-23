import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Paid from "../../../../images/icons-check-green-copy-9.png";
import Unpaid from "../../../../images/icons-check-reed-copy.png";

const useStyles = makeStyles({
    table: {
        width: '55%',
        margin:'auto',
      },
      TableRow:{
          borderRight:"1px solid #f0f0f6",
          borderLeft:"1px solid #f0f0f6",
      },
      ForeColor:{
        color:"rgba(21, 26, 59, 0.5)",
      },
      Cost:{
          marginLeft:'13px',
          fontSize:'14px',
          color:'#f0f0f6',
      },
      Image:{
          height:"24px",
          width:"24px",
          backgroundRepeat:"no-repeat",
      }
  });
  function createData(Title,Cost,Sep,Oct,Nov, Dec ,Jan,Feb,Mar,Apr,May) {
    return { Title,Cost,Sep,Oct,Nov,Dec ,Jan,Feb,Mar,Apr,May };
  }
  
  const rows = [
    createData('School Fees','2000',Paid,Paid,Unpaid,null,null,null,null,null,null),
    createData('Insurance Fees','800',Paid,Paid,Paid,null,null,null,null,null,null),
    createData('Transport Fees','200',Paid,Paid,Unpaid,null,null,null,null,null,null),
    
  ];
export default function Finance() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow className={classes.TableRow}>
                        <TableCell style={{width:200}}   className={classes.ForeColor}>Expenses</TableCell>
                        <TableCell className={classes.ForeColor}>Sep</TableCell>
                        <TableCell className={classes.ForeColor}>Oct</TableCell>
                        <TableCell className={classes.ForeColor}>Nov</TableCell>
                        <TableCell className={classes.ForeColor}>Dec</TableCell>
                        <TableCell className={classes.ForeColor}>Jan</TableCell>
                        <TableCell className={classes.ForeColor}>Feb</TableCell>
                        <TableCell className={classes.ForeColor}>Mar</TableCell>
                        <TableCell className={classes.ForeColor}>Apr</TableCell>
                        <TableCell className={classes.ForeColor}>May</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.Title} className={classes.TableRow}>
                        <TableCell component="th" scope="row">
                            <div className={classes.TS}>
                                <span>{row.Title}</span>
                                <span className={classes.Cost}>{row.Cost}</span>
                            </div>
                        </TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Sep})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Oct})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Nov})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Dec})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Jan})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Feb})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Mar})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.Apr})`}}></TableCell>
                        <TableCell className={classes.Image} style={{backgroundImage:`url(${row.May})`}}></TableCell>
                    </TableRow> 
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
