import { Typography, Box } from '@mui/material'

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography variant="h2" color='secondary' fontWeight="bold" sx={{ m: '0 0 5px 0' }}>
        {title}
      </Typography>
    </Box>
  )
}

export default Header
