import React, { useContext } from 'react';
import { AppBar, Badge, Box, Button, Container, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { adminContext } from '../../../context/AdminContext';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import BurgerMenu from '../../../container/Pages/Header/BurgerMenu';
import { useHistory } from 'react-router-dom';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Header.css'
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        // marginLeft: "20%",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            marginLeft: theme.spacing(3),
            width: '20px',
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '50px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: '100px',
        }, 
    }
}));

const Header = () => {
    const classes = useStyles();
    const { getTours, toursCountInCart } = useContext(adminContext);
    const history = useHistory()

    function handleInputSearch(e) { 
        let search = new URLSearchParams(history.location.search)
        search.set("q=", e.target.value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getTours()
    }
    return (
        <div>
            <AppBar style={{ backgroundColor: '#5b5d5e' }} position="fixed">
                <Container fixed>
                    <Toolbar>
                        <div style={{ marginLeft: "20px" }}>
                            <BurgerMenu props={history} />
                        </div>
                        <Typography variant="h6" className={classes.title}>InTourist</Typography>
                        <div className={classes.search}>
                            <InputBase
                                onChange={handleInputSearch}
                                placeholder="Search…"
                                
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>

                                <Link to="/cart" style={{ color: "inherit", textDecoration: "none", marginRight: "20px"}}>
                                    <Badge badgeContent={toursCountInCart} color="secondary">
                                    <ShopTwoIcon  />
                                    </Badge>
                                </Link>
                        <Link to="/admin" style={{color: "inherit", textDecoration: "none"}}>
                            <SupervisorAccountIcon />
                        </Link>
                        <Box mr={3} style={{marginLeft: "20px"}}>
                        <Link to="/signin" style={{ color: "inherit", textDecoration: "none" }}>
                            <Button color="inherit" variant="outlined" className="">Sign In</Button>
                        </Link>
                        </Box>
                        <Link to="/signup" style={{ color: "inherit", textDecoration: "none" }}>
                            <Button color="secondary" variant="contained">Sign Up</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;