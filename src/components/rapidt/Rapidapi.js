import React, { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  TextareaAutosize,
  Box,
  CardHeader,
  Select,
  MenuItem,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Rapidapi = () => {
  const [getLangs, setGetLangs] = useState([]);
  const [dont, setDont] = useState("");
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Translated Text Apper Here");
  const axios = require("axios");

  // Get Languages Functionality
  const options = {
    method: "GET",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "3637d2aa92mshb9e86e67f582946p12fe2bjsn026b4505ee3c",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGetLangs(response.data.data.languages);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Translate Functionality

  const encodedParams = new URLSearchParams();
  encodedParams.append("q", input);
  encodedParams.append("target", to);
  encodedParams.append("source", from);

  const options1 = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "3637d2aa92mshb9e86e67f582946p12fe2bjsn026b4505ee3c",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };
  function TranslateTo() {
    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data.data.translations[0].translatedText);
        setOutput(response.data.data.translations[0].translatedText);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          width: 500,
          height: 450,
          border: 3,
          alignItems: "center",
          borderColor: "pink",
        }}
      >
        <CardHeader title={"Translation Page"} />
        {"From "}
        <Select
          labelId="demo-simple-select-label"
          label="Language"
          onChange={(e) => setFrom(e.target.value)}
        >
          {getLangs.map((ele, index) => {
            return (
              <MenuItem key={index} value={ele.language}>
                {ele.language}
              </MenuItem>
            );
          })}
        </Select>
        {" To "}
        <Select
          labelId="demo-simple-select-label"
          label="Language"
          onChange={(e) => setTo(e.target.value)}
        >
          {getLangs.map((ele, index) => {
            return (
              <MenuItem key={index} value={ele.language}>
                {ele.language}
              </MenuItem>
            );
          })}
        </Select>
        <CardContent>
          <TextareaAutosize
            maxRows={4}
            aria-label="maximum height"
            style={{ width: 250, height: 88 }}
            placeholder="Enter Your Text"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <TextareaAutosize
            maxRows={4}
            aria-label="maximum height"
            style={{ width: 250, height: 88 }}
            value={output}
          />

          <Box>
            <Fab
              variant="extended"
              size="medium"
              color="secondary"
              onClick={TranslateTo}
            >
              Translate
            </Fab>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Rapidapi;
