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
      },
      Subject:{
        color:'#f0f0f6',
        fontSize:10,
      },
      Abrv:{
          display:"inline-flex",
          width: "32px",
          height: "32px",
          borderRadius: "20px",
          textAlign:"center",
          justifyContent:"center",
          alignItems:"center",
      },
      TS:{
        display:"inline-block",
        marginLeft:"8px",
      }
  });
  function createData(Class,Subject,Abrv, Date,BgColor,Note) {
    return { Class,Subject,Abrv, Date,BgColor,Note};
  }
  
  const rows = [
    createData('CP2','Subject','MA','20-12-2020','#e9ddfd','Lorem ipsum dolor sit consectetur adipiscing elit.'),
    createData('CP2','Subject','FR','20-12-2020','#fceeca','Lorem ipsum dolor sit consectetur adipiscing elit.'),
    createData('CP2','Subject','AR','20-12-2020','#daf0bc','Lorem ipsum dolor sit consectetur adipiscing elit.'),
    createData('CP2','Subject','EN','20-12-2020','#fce3d5','Lorem ipsum dolor sit consectetur adipiscing elit.'),
    createData('CP2','Subject','PH','20-12-2020','#f8d3ec','Lorem ipsum dolor sit consectetur adipiscing elit.'),
  ];
export default function Attitude() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead >
                <TableRow className={classes.TableRow}>
                    <TableCell style={{color:"rgba(21, 26, 59, 0.5)"}}>Subject name</TableCell>
                    <TableCell align="center" style={{color:"rgba(21, 26, 59, 0.5)"}}>Note</TableCell>
                    <TableCell align="right">Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.Class} className={classes.TableRow}>
                    <TableCell component="th" scope="row">
                        <div className={classes.Abrv} style={{backgroundColor:row.BgColor}}>
                            {row.Abrv}
                        </div>
                        <div className={classes.TS}>
                            <span>{row.Class}</span>
                            <div className={classes.Subject}>{row.Subject}</div>
                        </div>
                    </TableCell>
                    
                    <TableCell align="center">{row.Note}</TableCell>
                    <TableCell align="right">{row.Date}</TableCell>
                </TableRow> 
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}
