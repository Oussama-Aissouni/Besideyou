import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
    {
      value: '',
    },
  ];

const useStyles = makeStyles((theme) => ({
  center:{
    margin: "0px auto",
    display: "table"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function Details() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
    return (
      <div className={classes.center}>
        <form className={classes.root} noValidate autoComplete="off">
            <div>Students Details</div>
            <div>
                <TextField
                placeholder="Add Text"
                id="outlined-helperText"
                label="First Name"
                variant="outlined"
                />
                <TextField
                placeholder="Add Text"
                id="outlined-helperText"
                label="Last Name"
                variant="outlined"
                />
                <br></br>
                <TextField 
                id="filled-select-currency-native"
                select
                label="Level"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                    </option>
                ))}
                </TextField>
                <TextField
                id="filled-select-currency-native"
                select
                label="Class"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                    </option>
                ))}
                </TextField>
                <br></br>
                <TextField
                placeholder="Add Text"
                id="outlined-helperText"
                label="Whatsapp Number"
                variant="outlined"
                />
                <TextField
                placeholder="Add Text"
                id="outlined-helperText"
                label="Address"
                variant="outlined"
                />
            </div>
            <div>Parents Details</div>
            <div>
                <TextField
                placeholder="Add Text"
                id="outlined-helperText"
                label="Parents full name"
                variant="outlined"
                />
                <TextField
                placeholder="Add Text"
                id="outlined-helperText"
                label="Parents Whatsapp Number"
                variant="outlined"
                />
            </div>
        </form>
      </div>
    )
}
