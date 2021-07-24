
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(.5),
    },
  },
  center:{
    justifyContent: 'center',
    marginBottom:'20px',
    marginTop:'50px',
    marginright: '100px',
  },
  paper: {
    height: "60vh",
    width: "60vw",
    padding: theme.spacing(1),
    borderRadius: '15px',
  },
  form: {
    display: 'flex',
    display: 'flex',
    flexWrap: 'wrap',
    
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
backgroundColor: "white",
 marginTop: '50px',
 paddingLeft: '10px',
 marginLeft:'50px',
    marginRight:'50px',
   float:'none',
   height: "5vh",
   width: "10vw",

  },
  content:{
   marginTop: '20px',
   
  
  },
floatright:{
 float:'right',
}
,}));