import React , {useState , useEffect , useContext} from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery , Typography} from '@material-ui/core';
import {CarContext} from "../../context/CarContext";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const CarDetailsForm = props => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [cars] = useContext(CarContext)
    const [makers, setMakers] = useState([])
    const [models , setModels] = useState([])
    const [maker , setMaker] = useState([])
    const [item , setItem] = useState(null);
    useEffect(() =>  {
        const keys = [];
        cars?.map((c) =>  {
            keys.push(c.Make)
        })
        setMakers(keys)
        console.log("Makers",makers)
    },[cars])

    const handleChange = (event) =>  {
      const maker = event.target.value;
      setMaker(maker);
    };
    const handleChangeModel = event =>  {
        const model_item = event.target.value;
        setItem(model_item);
        console.log("ITEM",item)
    };
    useEffect(()=> {
        const model = cars?.filter(c =>  c.Make ===   maker)
        setModels(model[0]?.Models)
        console.log("model" , models);
    },[maker]);
    return (
        <div className={classes.form_Div}>
            <Typography className={classes.enter_car}>
                {"Enter your car details"}
            </Typography>
           <form autoComplete={false} noValidate={true}>
               <FormControl>
             <label className={classes.car_make} id={"car_make"}>{"Car Make"}</label>
                   <select className={classes.bg} id={"car_make"} onChange={(event)=> {handleChange(event)}}>
                       {makers.map((m) => {
                            return(
                                <option className={classes.car_makers_txt} value={m}>{m}</option>
                            )
                       })
                       }
                   </select>
               </FormControl>
               {models?.length ===   0 ? null :  <FormControl>
                   <label className={classes.car_model} id={"car_model"}>{"Car Model"}</label>
                   <select className={classes.bg} id={"car_model"} onChange={(event)=> {handleChangeModel(event)}}>
                       {models?.map((m) => {
                           return(
                               <option className={classes.car_makers_txt} value={m}>{m}</option>
                           )
                       })
                       }
                   </select>
               </FormControl> }
           </form>
        </div>
        );

}
export default CarDetailsForm;