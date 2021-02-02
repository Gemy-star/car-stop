import React from 'react';
import Header from '../../components/layouts/Header/index'
import useStyles from "../../components/layouts/Header/styles";
const Index = () => {
    const classes = useStyles();

    return (
      <div className={classes.sell_car_container}>
          <Header />
      </div>
    )
}

export default Index;