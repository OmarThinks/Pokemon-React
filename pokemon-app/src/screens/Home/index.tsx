"use client";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@redux";
import { themeSelector } from "@redux";
import { Typography } from "@mui/material";

export default function Home() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography>Home</Typography>
      <button
        onClick={() => {
          dispatch(changeTheme(theme === "light" ? "dark" : "light"));
          //console.log(theme);
        }}
      >
        Change Theme
      </button>
    </div>
  );
}
