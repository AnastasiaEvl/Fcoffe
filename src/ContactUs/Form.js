import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="on"
      style={{
        marginTop: "60px",
      }}
    >
      {/* <div
        style={{
          marginTop: "90px",
          marginLeft: "10.3%",
          width: "51px",
          height: "13px",
          fontSize: "11px",
        }}
      >
        Ваше имя
      </div> */}

      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Ваше имя"
        size="small"
        // style={{
        //   backgroundColor: "#F7F7F7",
        //   width: "65.625%",
        //   height: "37px",
        //   fontSize: "11px",
        //   marginLeft: "29.375%",
        //   marginTop: "0px",
        // }}
      />

      <img src="./image/LineB.png" />
      <div
        style={{
          marginTop: "30px",
          marginLeft: "10.3%",
          width: "51px",
          height: "13px",
          fontSize: "11px",
        }}
      >
        E-mail
      </div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        label="Ваше имя"
        style={{
          backgroundColor: "#F7F7F7",
          width: "65.625%",
          height: "37px",
          fontSize: "11px",
          marginLeft: "29.375%",
          boxSizing: "border-box",
          padding: "0px",
        }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        style={{
          backgroundColor: "#F7F7F7",
          width: "65.625%",
          height: "37px",
          fontSize: "11px",
          marginLeft: "29.375%",
          boxSizing: "border-box",
          padding: "0px",
        }}
      />
    </Box>
  );
}
