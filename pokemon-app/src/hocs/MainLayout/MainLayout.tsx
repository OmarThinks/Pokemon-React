"use client";
import { Box, Typography } from "@mui/material";
import { ReduxProvider } from "@redux";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@redux";
import { themeSelector } from "@redux";
import { Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Card } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const MainLayout = (Element: React.FunctionComponent) => {
  const ToReturn = () => {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();
    const muiTheme = useTheme();
    return (
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              dispatch(changeTheme(theme === "light" ? "dark" : "light"));
            }}
            color="inherit"
          >
            {muiTheme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <Element />
      </Box>
    );
  };
  return ToReturn;
};

export default MainLayout;
