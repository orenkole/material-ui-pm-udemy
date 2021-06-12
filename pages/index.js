import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles(theme => ({

}))

function createData(name, date, service, features, complexity, platforms, users, total) {
  return { name, date, service, features, complexity, platforms, users, total }
}

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();

  const [rows, setRows] = useState([
    createData(
      "Zachary Reece",
      "11/2/19",
      "E-Commerce",
      "N/A",
      "N/A",
      "N/A",
      "$1500"
    ),
  ])

  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);

  return <Grid container direction="column">
    <Grid item style={{ marginTop: "2em", marginLeft: "5em", }}>
      <Typography variant="h1">Projects</Typography>
    </Grid>
    <Grid item>
      <TextField
        placeholder="Search project details or crate a new entry"
        style={{ width: "35em", marginLeft: "5em" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddIcon color="primary" />
            </InputAdornment>
          )
        }}
      />
    </Grid>
    <Grid item style={{ marginLeft: "5em", marginTop: "2em" }}>
      <FormGroup row>
        <FormControlLabel
          style={{ marginRight: "5em" }}
          control={
            <Switch
              checked={websiteChecked}
              onChange={() => setWebsiteChecked(!websiteChecked)}
            />
          }
          label="Websites"
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ marginRight: "5em" }}
          control={
            <Switch
              checked={iOSChecked}
              onChange={() => setiOSChecked(!iOSChecked)}
            />
          }
          label="iOS Apps"
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ marginRight: "5em" }}
          control={
            <Switch
              checked={androidChecked}
              onChange={() => setAndroidChecked(!androidChecked)}
            />
          }
          label="Android Apps"
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ marginRight: "5em" }}
          control={
            <Switch
              checked={softwareChecked}
              onChange={() => setSoftwareChecked(!softwareChecked)}
            />
          }
          label="Custom software"
          labelPlacement="start"
        />
      </FormGroup>
    </Grid>
    <Grid item container justify="flex-end" style={{ marginTop: "5em" }}>
      <Grid item syle={{ marginRight: 75 }}>
        <FilterListIcon color="secondary" style={{ fontSize: 50 }} />
      </Grid>
    </Grid>
    <Grid item>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Features</TableCell>
              <TableCell>Complexity</TableCell>
              <TableCell>Platforms</TableCell>
              <TableCell>Users</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.features}</TableCell>
                  <TableCell>{row.complexity}</TableCell>
                  <TableCell>{row.platforms}</TableCell>
                  <TableCell>{row.users}</TableCell>
                  <TableCell>{row.total}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>
}