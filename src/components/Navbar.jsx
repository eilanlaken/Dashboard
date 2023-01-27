import React, {useState} from 'react'
import {
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, 
    SettingsOutlined, 
    ArrowDropDownOutlined 
} from "@mui/icons-material"
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { toggleMode } from '../state'
import profileImage from '../assets/profile.jpg'
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'

function Navbar({
    isSidebarOpen,
    setIsSidebarOpen,
}) {
    const dispatch = useDispatch();
    const theme = useTheme();
  return <AppBar 
    sx={{
        position: "static",
        background: "none",
        boxShadow: "none"
    }}>
        <Toolbar sx={{justifyContent: "space-between"}}>
            {/* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </IconButton>
                <FlexBetween 
                    backgourndColor={theme.palette.background.alt}
                    borderRadius="9px"
                    gap="3rem"
                    padding="0.1rem 1.5rem"
                >
                    <InputBase placeholder='Search...' />
                    <IconButton>
                        <Search />
                    </IconButton>

                </FlexBetween>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(toggleMode())} >
                    {theme.palette.mode === 'dark' ? 
                    (<DarkModeOutlined sx={{ fontSize: "24px"}} />)
                        :
                    (<LightModeOutlined sx={{ fontSize: "24px"}} />)
                    }
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{ fontSize: "24px"}} />
                </IconButton>
            </FlexBetween>
        </Toolbar>
  </AppBar>
}

export default Navbar