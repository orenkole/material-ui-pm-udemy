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
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";

const useStyles = makeStyles(theme => ({
  service: {
    fontWeight: 300,
  },
  button: {
    color: "#fff",
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    }
  }
}))

function createData(
  name,
  date,
  service,
  features,
  complexity,
  platforms,
  users,
  total,
  search
) {
  return {
    name,
    date,
    service,
    features,
    complexity,
    platforms,
    users,
    total,
    search
  };
}

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();

  const [rows, setRows] = useState([
    createData(
      "Zachary Reece",
      "11/2/19",
      "Website",
      "E-Commerce",
      "N/A",
      "N/A",
      "N/A",
      "$1500",
      true
    ),
    createData(
      "Bill Gates",
      "10/17/19",
      "Custom Software",
      "GPS, Push Notifications, Users/Authentication, File Transfer",
      "Medium",
      "Web Application",
      "0-10",
      "$1600",
      true
    ),
    createData(
      "Steve Jobs",
      "2/13/19",
      "Custom Software",
      "Photo/Video, File Transfer, Users/Authentication",
      "Low",
      "Web Application",
      "10-100",
      "$1250",
      true
    ),
    createData(
      "Stan Smith",
      "2/13/19",
      "Mobile App",
      "Photo/Video, File Transfer, Users/Authentication",
      "Low",
      "iOS, Android",
      "10-100",
      "$1250",
      true
    ),
    createData(
      "Albert Einstein",
      "2/13/19",
      "Mobile App",
      "Photo/Video, File Transfer, Users/Authentication",
      "Low",
      "Android",
      "10-100",
      "$1250",
      true
    )
  ]);

  const platformOptions = ["Web", "iOS", "Android"]
  const featureOptions = ["Photo/Video", "GPS", "File transfer", "Users/Authentication", "Biometrics", "Push Notifications"]

  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [total, setTotal] = useState("")
  const [service, setService] = useState("");
  const [complexity, setComplexity] = useState("");
  const [users, setUsers] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);

  const addProject = () => {
    setRows([
      ...rows,
      createData(
        name,
        format(date, "MM/dd/yy"),
        service,
        features.join(", "),
        complexity,
        platforms.join(", "),
        users,
        total,
      )
    ]);
    setDialogOpen(false);
    setName("");
    setDate(new Date());
    setTotal("");
    setService("");
    setComplexity("");
    setUsers("");
    setPlatforms([]);
    setFeatures([]);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container direction="column">
        <Grid item style={{ marginTop: "2em", marginLeft: "5em", }}>
          <Typography variant="h1">Projects</Typography>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Search project details or crate a new entry"
            style={{ width: "35em", marginLeft: "5em" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"
                  style={{ cursor: "pointer" }}
                  onClick={() => setDialogOpen(true)}
                >
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
        <Grid item style={{ marginBottom: "15em" }}>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Service</TableCell>
                  <TableCell align="center">Features</TableCell>
                  <TableCell align="center">Complexity</TableCell>
                  <TableCell align="center">Platforms</TableCell>
                  <TableCell align="center">Users</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.service}</TableCell>
                      <TableCell align="center">{row.features}</TableCell>
                      <TableCell align="center">{row.complexity}</TableCell>
                      <TableCell align="center">{row.platforms}</TableCell>
                      <TableCell align="center">{row.users}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Dialog
          fullWidth
          maxWidth="md"
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <Grid container justify="center">
            <Grid item>
              <Typography variant="h1" gutterBottom>
                Add a new project
              </Typography>
            </Grid>
          </Grid>
          <DialogContent>
            <Grid container justify="space-between">
              <Grid item>
                <Grid item container direction="column" sm>
                  <Grid item>
                    <TextField
                      fullWidth
                      label="Name"
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Grid>
                  <Grid item container
                    direction="column"
                    style={{ marginTop: "5em" }}
                  >
                    <Grid item>
                      <Typography variant="h4">Service</Typography>
                    </Grid>
                    <Grid item>
                      <RadioGroup
                        aria-label="service"
                        name="service"
                        value={service}
                        onChange={event => setService(event.target.value)}
                      >
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="Website"
                          label="Website"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="Mobile App"
                          label="Mobile App"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="Custom Software"
                          label="Custom Software"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item style={{ marginTop: "5em" }}>
                      <Select
                        MenuProps={{ style: { zIndex: 1302 } }}
                        style={{ width: "12em" }}
                        labelId="platforms"
                        id="platforms"
                        multiple
                        displayEmpty
                        renderValue={platforms.length > 0
                          ? undefined
                          : () => "Platforms"
                        }
                        value={platforms}
                        onChange={event => setPlatforms(event.target.value)}
                      >
                        {
                          platformOptions.map((option) => (
                            <MenuItem
                              key={option}
                              value={option}
                            >{option}</MenuItem>
                          ))
                        }
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction="column" sm
                  style={{ marginTop: 16 }}
                >
                  <Grid item>
                    <KeyboardDatePicker format="MM/dd/yyyy"
                      value={date}
                      onChange={(newDate) => setDate(newDate)}
                    />
                  </Grid>
                  <Grid item container
                    direction="column"
                    style={{ marginTop: "5em" }}
                  >
                    <Grid item>
                      <Typography variant="h4">Complexity</Typography>
                    </Grid>
                    <Grid item>
                      <RadioGroup
                        aria-label="complexity"
                        name="complexity"
                        value={complexity}
                        onChange={event => setComplexity(event.target.value)}
                      >
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="Low"
                          label="Low"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="Medium"
                          label="Medium"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="High"
                          label="High"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction="column" sm>
                  <Grid item>
                    <TextField
                      InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                      value={total}
                      id={total}
                      label="Total"
                      onChange={event => setTotal(event.target.value)}
                    />
                  </Grid>
                  <Grid item container
                    direction="column"
                    style={{ marginTop: "5em" }}
                  >
                    <Grid item>
                      <Typography variant="h4">Users</Typography>
                    </Grid>
                    <Grid item>
                      <RadioGroup
                        aria-label="users"
                        name="users"
                        value={users}
                        onChange={event => setUsers(event.target.value)}
                      >
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="0-10"
                          label="0-10"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="10-100"
                          label="10-100"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="100+"
                          label="100+"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item style={{ marginTop: "5em" }}>
                      <Select
                        MenuProps={{ style: { zIndex: 1302 } }}
                        style={{ width: "12em" }}
                        labelId="features"
                        id="features"
                        multiple
                        displayEmpty
                        renderValue={features.length > 0
                          ? undefined
                          : () => "Features"
                        }
                        value={features}
                        onChange={event => setFeatures(event.target.value)}
                      >
                        {
                          featureOptions.map((feature) => (
                            <MenuItem
                              key={feature}
                              value={feature}
                            >{feature}</MenuItem>
                          ))
                        }
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item style={{ marginTop: "3em" }}>
                <Button
                  color="primary"
                  style={{ fontWeight: 300 }}
                  onClick={() => setDialogOpen(false)}
                >Cancel</Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={addProject}
                  disabled={service === "Website"
                    ? name.length === 0 || total.length === 0 || features.length === 0
                    : name.length === 0 || total.length === 0 || features.length === 0 || users.length === 0 || complexity.length === 0 || platform.length === 0 || service.length === 0
                  }
                >Add Project +</Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </MuiPickersUtilsProvider>
  )
}