import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import { useIntl } from 'react-intl';
const Home = lazy(() =>  import('../Home'));


const App = () => {

    const classes = useStyles();
    const locale = useIntl().locale;
 return (
     <Suspense
         fallback={
             <Backdrop className={classes.backdrop} open>
                 <CircularProgress />
             </Backdrop>
         }
     >
         <Switch>
             <Route exact path="/" component={Home} />
         </Switch>

     </Suspense>
 )

}

export default App;