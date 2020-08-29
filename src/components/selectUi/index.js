import React, { Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function SelectUI(props) {
    const classes = useStyles()
    return(
        <Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel id="selectLabel">{props.label}</InputLabel>
                <Select labelId="selectLabel" value={props.value} onChange={props.onChange}>
                  <MenuItem value="Selecione" disabled hidden>Selecione</MenuItem>
                  {props.menuItemsMap}
                </Select>
            </FormControl>
        </Fragment>
    )
}

export default SelectUI;