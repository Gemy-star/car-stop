import React , {useState , useEffect , useContext} from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery , Typography , Button } from '@material-ui/core';
import {CarContext} from "../../context/CarContext";
import FormControl from '@material-ui/core/FormControl';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CarDetailsForm = props => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [cars] = useContext(CarContext)
    const [makers, setMakers] = useState([])
    const [maker , setMaker] = useState([])
    const [models,setModels] = useState([])
    const [item , setItem] = useState(null);
    const [error , setError] = useState({maker:false , model:false , fullName:false , phone:false})
    const [phone , setPhone] = useState(null);
    const [name , setName] = useState(null);
    const [formIsValid , setFormIsValid] = useState(true);
    useEffect(() =>  {
        const keys = [];
        cars?.map((c) =>  {
            keys.push(c.Make)
        })
        setMakers(keys)
        console.log("Makers",makers)
    },[cars])

    const handleChangeMaker = (event) =>  {
        console.log(event , "BluR")
        if(event.type===   "blur") {
            event.target.value ===   "Acura" ? setError({...error , maker:true}):setError({...error , maker:false})
        }
      const make = event.target.value;
       !make ? setError({...error , maker:true}):setError({...error , maker:false})
      setMaker(make);
    };
    const handleChangeModel = event =>  {
        const model_item = event.target.value;
        !model_item ? setError({...error , model:true}):setError({...error , model:false})
        setItem(model_item);
        console.log("ITEM",item)
    };
    useEffect(()=> {
        const model = cars?.filter(c =>  c.Make ===   maker)
        setModels(model[0]?.Models)
        console.log("model" , models);
    },[maker]);
   const handleSubmit = (event) =>  {
       event.preventDefault();
       console.log(event);
    if(error.fullName &&  error.phone &&  error.maker &&  error.model ) {
        setFormIsValid(true);
    }else {
        setFormIsValid(false);
    }
   };
    const handleChangeFullName = event =>  {
        const fullName = event.target.value;
        fullName=== "" ? setError({...error , fullName:true}):setError({...error , fullName:false})
        setName(fullName);
        console.log("fullName",fullName)
    };
    const handleChangePhone = event =>  {
        const num = event.target.value;
        num=== "" ? setError({...error , phone:true}):setError({...error , phone:false})
        setPhone(num);
        console.log("Phone",num)
    };
    return (
        <div className={classes.form_Div}>
            {formIsValid ? null :  <div className={classes.bg_field}>
                <Typography className={classes.err_txt}>
                    {"* All fields are required to be filled"}
                </Typography>
            </div>}
            <Typography className={classes.enter_car}>
                {"Enter your car details"}
            </Typography>
           <form autoComplete={false} onSubmit={(event)=> {handleSubmit(event)}}>
               <FormControl>
             <label className={classes.car_make} id={"car_make"}>{"Car Make"}</label>
                   <select name={"car_make"} onBlur={(event) =>  {handleChangeMaker(event)}} className={error.maker ? classes.bg_error : classes.bg} id={"car_make"} onChange={(event)=> {handleChangeMaker(event)}}>
                       {makers.map((m) => {
                            return(
                                <option className={classes.car_makers_txt} value={m}>{m}</option>
                            )
                       })
                       }
                   </select>
               </FormControl>
               {models?.length ===   0 ? null :  <FormControl>
                   <label className={classes.car_Model} id={"car_model"}>{"Car Model"}</label>
                   <select name="car_model" className={classes.bg} id={"car_model"} onChange={(event)=> {handleChangeModel(event)}}>
                       {models?.map((m) => {
                           return(
                               <option className={classes.car_makers_txt} value={m}>{m}</option>
                           )
                       })
                       }
                   </select>
               </FormControl> }
               <Typography className={classes.enter_contact}>
                   {"Enter your Contact Info"}
               </Typography>
               <FormControl>
                   <label className={classes.full_name} id={"full_name"}>{"Your Full Name"}</label>
                    <input type="text" name="full_name" className={error.fullName ? classes.bg_error : classes.bg} id="full_name" onChange={(e)=>{handleChangeFullName(e)}} onBlur={(e)=>{handleChangeFullName(e)}} />
               </FormControl>
               <FormControl>
                   <label className={classes.phone} id={"phone"}>{"Your Phone Number"}</label>
                   <input type="number" name="phone" className={error.phone ? classes.bg_error : classes.bg} id="phone"  onChange={(e)=>{handleChangePhone(e)}} onBlur={(e)=>{handleChangePhone(e)}}/>
               </FormControl>
               <FormControl>
                   <Button
                       type="submit"
                       className={classes.bg_button}
                       endIcon={<ArrowForwardIosIcon className={classes.white_arrow} style={{color:'#ffffff'}}/>}
                   >
                       <Typography className={classes.send_query}>
                           {"Send Your Inquiry"}
                       </Typography>
                   </Button>
               </FormControl>
           </form>
        </div>
        );

}
export default CarDetailsForm;