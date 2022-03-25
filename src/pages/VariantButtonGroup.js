import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button><Link to="/appointment">Your Appointment</Link></Button>
        <Button><Link to="/shop">Shoping Cart</Link></Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
}
