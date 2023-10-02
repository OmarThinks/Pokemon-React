"use client";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@redux";
import { themeSelector } from "@redux";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Card } from "@mui/material";

export default function Home() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const muiTheme = useTheme();

  console.log(muiTheme.palette.mode);

  return (
    <Box>
      <Typography>Home</Typography>
      <button
        onClick={() => {
          dispatch(changeTheme(theme === "light" ? "dark" : "light"));
          //console.log(theme);
        }}
      >
        Change Theme
      </button>
    </Box>
  );
}
