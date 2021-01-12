import React, { useContext, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import { adminContext } from '../../context/AdminContext';
import './ToursCard.css'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        margin: '20px 30px'
    },
    media: {
        height: "25vh",
        width: "100%",
        paddingTop: '56.25%', // 16:9
        // backgroundSize: "contain"
    },
    expand: {
        transform: 'rotate(0deg)',
        // marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default function ToursCardItem({ item }) {
    const classes = useStyles();
    const { getTours, tours, deleteTour, editTours, addAndDeleteTourInCart } = useContext(adminContext)

    useEffect(() => {
        getTours()
    }, [])

    return (
        <Grid item md={12} style={{ display: "flex", justifyContent: "space-around", marginBottom: "50px", marginTop: "50px", flexWrap: 'wrap' }}>

            {tours.map(item => (
                <Card key={item.id} className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={item.img}
                    />
                    <Link to={`/details/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <CardHeader
                            title={<Typography variant="h5" align="center">{item.destination}</Typography>}
                            subheader={<Typography align="center">{item.category}</Typography>}
                        />
                    </Link>
                    <span style={{ display: "flex", justifyContent: "center" }}>Цена {item.price} сом</span>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'space-around' }}>
                        <IconButton
                            onClick={() => addAndDeleteTourInCart(item)}
                            variant="contained"
                        // color={checkTourInCart(item.id) ? 'secondary' : 'primary'}
                        >
                            {/* <span style={{marginLeft: "30px"}}>в корзину</span> */}
                            <ShopTwoIcon />
                        </IconButton>
                    </CardActions>

                </Card>
            ))}
            <Pagination />
        </Grid>
    );
}