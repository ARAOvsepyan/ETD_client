import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const SideBar = () => {
  const theme = useTheme()

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      // sx={{
      //   '& .pro-sidebar-inner': {
      //     background: `${colors.primary[400]} !important`
      //   },
      //   '& .pro-icon-wrapper': {
      //     backgroundColor: 'transparent !important'
      //   },
      //   '& .pro-inner-item': {
      //     padding: '5px 35px 5px 20px !important'
      //   },
      //   '& .pro-inner-item:hover': {
      //     color: '#868dfb !important'
      //   },
      //   '& .pro-menu-item.active': {
      //     color: '#6870fa !important'
      //   }
      // }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              // color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3">
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
                title='Tables'
                to='/tables'
                icon={<TableChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            <Item
              title='LogIn'
              to='/auth'
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SideBar
