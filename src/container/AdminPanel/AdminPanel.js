import { Card, CardContent, CardHeader, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { adminContext } from '../../context/AdminContext';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';

const useStyles = makeStyles((theme) => ({
}));

const AddContact = () => {

  const [tour, setTours] = useState({});
  const { addTours, getTours, tours, deleteTour, toursToEdit, editTours } = useContext(adminContext)
  const classes = useStyles();

  useEffect(() => {
    getTours()
  }, [])

  function handleInputsValue(e) {
    let obj = {
      ...tour,
      [e.target.name]: e.target.value
    }
    setTours(obj)
  }

  return (
    <Grid>
      <div>
        <table className="table">
          <thead style={{ backgroundColor: "black", color: "#fff", display: "flex", justifyContent: "space-between" }}>
            <tr>
              <th scope="col">Destination</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>
                <input
                  name="destination"
                  onChange={handleInputsValue}
                  type="text"
                  placeholder="destination"
                />
                <input
                  name="description"
                  onChange={handleInputsValue}
                  type="text"
                  placeholder="description"
                />
                <input
                  name="img"
                  onChange={handleInputsValue}
                  type="text"
                  placeholder="image"
                />
                <input
                  name="category"
                  onChange={handleInputsValue}
                  type="text"
                  placeholder="category"
                />
                <input
                  name="price"
                  onChange={handleInputsValue}
                  type="text"
                  placeholder="price"
                />
                <Link to="/">
                  <button className='btn btn-danger' style={{ marginLeft: "20px" }}
                    onClick={() => addTours(tour)} >Add</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Grid item md={10} style={{ display: "flex", justifyContent: "space-around" }}>

          {tours.map(item => (
            <Card className={classes.root}>
              <CardHeader
                title={<Typography variant="h5" align="center">{item.destination}</Typography>}
                subheader={<Typography align="center">{item.category}</Typography>}
              />
              <Link to={`/details/${item.id}`}>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button className='btn btn-danger' onClick={() => deleteTour(item.id)}>Delete</button>
                <Link to="/edit">
                  <button className='btn btn-danger' onClick={() => editTours(item.id)}>Edit</button>
                </Link>
              </div>
            </Card>
          ))}
          <Pagination />
        </Grid>
      </div>
    </Grid>
  );
};

export default AddContact;