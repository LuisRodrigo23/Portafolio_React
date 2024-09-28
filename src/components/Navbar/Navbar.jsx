import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'; // Eliminada duplicación de Divider
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; // Agregadas las importaciones faltantes
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import handleNavbarScroll from "./srollHandler"

const drawerWidth = 240;
const navItems = [
    { label: 'Home', path: '/' },
    { label: 'DataLab', path: '/' },
    { label: 'Proyects', path: '/' },
    { label: 'Goo', path: '/' },
    { label: 'Goo Admin', path: '/' },
    { label: 'Nc Delicias', path: '/' }

];

function NavbarAb(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navBackground, setNavBackground] = React.useState('transparent');

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    React.useEffect(() => {
        const cleanup = handleNavbarScroll(setNavBackground); // Usar la lógica del scroll
        return cleanup;
    }, []);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', fontSize: '35px' }}>
            <Typography variant="h6" sx={{ my: 4, fontSize: '25px' }}>
                Opciones
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} sx={{ fontSize: '40px' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ position: 'absolute' }}> {/* Corregido el uso de 'display' a 'position' */}
            <CssBaseline />
            <AppBar
                component="nav"
                className="h-[4.5rem]"
                sx={{
                    backgroundColor: navBackground,
                    color: navBackground === 'transparent' ? '#fff' : '#000',
                    transition: 'background-color 0.3s ease',
                    boxShadow: 'none',
                }}
            >
                <Toolbar className="p-[1rem]">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="text-wrap text-[20px]">
                        <a href="/">LuisRod MUI</a>
                    </div>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={Link}
                                to={item.path}
                                sx={{ color: navBackground === 'transparent' ? '#fff' : '#000' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default NavbarAb;
