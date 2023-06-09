import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import ProfileImage from "assets/profile.jpeg";
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,

}) => {
  const Dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        positiion: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon />
            </IconButton>
            <FlexBetween 
                backgroundColor = {theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                padding="0.5rem 1rem"
            >
                <InputBase placeholder="Search..." />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
            <IconButton onClick={() => Dispatch(setMode())}>
                {theme.palette.mode === 'dark'? (
                    <DarkModeOutlined sx={{ fontSize: "25px"}} />
                ) : (
                    <LightModeOutlined sx={{ fontSize: "25px"}} />
                )}
            </IconButton>
            <IconButton>
                <SettingsOutlined sx={{ fontSize: "25px"}} />
            </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
