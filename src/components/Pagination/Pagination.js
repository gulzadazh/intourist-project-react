import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { adminContext } from '../../context/AdminContext';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationA = () => {
  const history = useHistory();
  const classes = useStyles();
  const { getTours, totalCount } = useContext(adminContext)

  function getPage(object, page) {
    let search = new URLSearchParams(history.location.search)
    search.set('_page', page)
    search.set('_limit', 4)
    let url = `${history.location.pathname}?${search.toString()}`
    history.push(url)
    getTours()
  }

  return (
    <div>
      {Math.ceil(totalCount / 3)?
        < Pagination count={Math.ceil(totalCount / 4)} variant="outlined" shape="rounded" onChange={getPage} />
      :''}

    </div>
  );
};

export default PaginationA;