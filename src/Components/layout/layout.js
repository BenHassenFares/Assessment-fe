import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import BusinessIcon from '@mui/icons-material/Business'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ListItemText from '@mui/material/ListItemText'
import TableViewIcon from '@mui/icons-material/TableView'
import HelpIcon from '@mui/icons-material/Help'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'
import LogoutIcon from '@mui/icons-material/Logout'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { AppBar, Drawer, styled } from '@mui/material'

import logo from '../../Images/logo-target-rgb.png'
import image from '../../Images/10.jpg'
import nextIcon from '../../Images/next_page.svg'
import target from '../../Images/target-name.png'

import { useKeycloak } from '@react-keycloak/web'

import './style.scss'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }))

  const navigate = useNavigate()
  const assessment = () => navigate('/list-assessment')
  const assignments = () => navigate('/list-assignment')
  const dashboard = () => navigate('/dashboard')
  const Profile = () => navigate('/Profile')
  const contact = () => navigate('/contact')
  const { keycloak } = useKeycloak()
  const [givenName, setGivenName] = useState('')

  useEffect(() => {
    const loadUserInfo = async () => {
      const response = await keycloak.loadUserInfo()
      setGivenName(response.given_name)
    }

    loadUserInfo()
  }, [])
  return (
    <Box className="box">
      <AppBar className={`appBar ${open ? 'open' : ''}`}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              display: open ? 'none' : 'inherit',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome&ensp;
          </Typography>
          <Typography variant="h6" noWrap component="div">
            {givenName}
          </Typography>
          <div className="side-right">
            <NotificationsNoneIcon className="side-right-notification" />
            <img src={image} alt="User" className="user-image" />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        onClose={handleDrawerClose}
        className={`drawer ${open ? 'open' : 'closed'}`}
      >
        <DrawerHeader>
          {open ? (
            <ListItem sx={{ paddingLeft: 1 }} onClick={handleDrawerClose}>
              <ListItemIcon>
                <img src={logo} alt="target logo" width={45} height={45} />
              </ListItemIcon>
              <ListItemText sx={{ color: '#002b96' }}>
                <img src={target} alt="logo" width={150} />
              </ListItemText>
            </ListItem>
          ) : (
            <ListItem sx={{ paddingLeft: 1 }}>
              <ListItemIcon>
                <BusinessIcon sx={{ color: '#002b96' }} />
              </ListItemIcon>
              <img src={nextIcon} alt="icon" onClick={handleDrawerOpen} />
            </ListItem>
          )}
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              className="list-item-button"
              sx={{ justifyContent: open ? 'initial' : 'center' }}
              onClick={dashboard}
            >
              <ListItemIcon
                className="list-item-icon"
                sx={{ mr: open ? 3 : 'auto' }}
              >
                <DashboardIcon sx={{ color: '#002b96' }} />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: '#002b96' }}>
                Dashboard
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              className="list-item-button"
              sx={{ justifyContent: open ? 'initial' : 'center' }}
              onClick={assignments}
            >
              <ListItemIcon
                className="list-item-icon"
                sx={{ mr: open ? 3 : 'auto' }}
              >
                <FactCheckIcon sx={{ color: '#002b96' }} />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: '#002b96' }}>
                Assignments{' '}
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              className="list-item-button"
              sx={{ justifyContent: open ? 'initial' : 'center' }}
              onClick={assessment}
            >
              <ListItemIcon
                className="list-item-icon"
                sx={{ mr: open ? 3 : 'auto' }}
              >
                <TableViewIcon sx={{ color: '#002b96' }} />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: '#002b96' }}>
                Assessments
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              className="list-item-button"
              sx={{ justifyContent: open ? 'initial' : 'center' }}
              onClick={Profile}
            >
              <ListItemIcon
                className="list-item-icon"
                sx={{ mr: open ? 3 : 'auto' }}
              >
                <AccountBoxIcon sx={{ color: '#002b96' }} />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: '#002b96' }}>
                Profile
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List style={{ marginTop: 'auto' }}>
          <ListItemButton>
            <ListItemIcon>
              <HelpIcon sx={{ color: '#002b96' }} />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
          <ListItemButton onClick={contact}>
            <ListItemIcon>
              <PermPhoneMsgIcon sx={{ color: '#002b96' }} />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItemButton>
          <ListItemButton onClick={() => keycloak.logout()}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: '#002b96' }} />
            </ListItemIcon>
            <ListItemText primary="Log out " />
          </ListItemButton>
        </List>
      </Drawer>
      <Box className="box-child" component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Box className="footer" sx={{ backgroundColor: '#002b96' }}>
        <Typography className="footer-typography" sx={{ color: '#002b96' }}>
          {' '}
          © {new Date().getFullYear()} Test Room
        </Typography>
      </Box>
    </Box>
  )
}

export default Layout
