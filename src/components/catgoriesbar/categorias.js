import { Box,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import PieChartIcon from '@mui/icons-material/PieChart';
import LoginIcon from '@mui/icons-material/Login'
import SpaIcon from '@mui/icons-material/Spa'
import './index.css'

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
    return (
        <Box className = 'drawer' sx = { { display: 'flex' } }>
            <CssBaseline />
            <Drawer
                className='drawer'
                sx = {{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <h1><SpaIcon className = 'icon' fontSize = 'lg' />Fisiotech</h1>
                <List>

                </List>
            </Drawer>
        </Box>
    )
}