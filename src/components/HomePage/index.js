import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HomePage = () => {
  const [language, setLanguage] = React.useState("");

  return (
    <>
      <Card sx={{ minWidth: 275, width: 500, heght: 500 }}>
        <CardContent>
          <TextField
            id="outlined-password-input"
            label="Enter Your Text"
            type="text"
          />
        </CardContent>
        <CardActions>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="laguage"
              onChange={(event) => {
                setLanguage(event.target.value);
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Fab variant="extended" size="small" color="primary" aria-label="add">
            Submit
          </Fab>
        </CardActions>
      </Card>
    </>
  );
};

export default HomePage;
