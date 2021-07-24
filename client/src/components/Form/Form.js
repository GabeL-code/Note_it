import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {CalenderComponent} from '@syncfusion/ej2-react-calendars';
import {Card} from 'react-bootstrap';
import {Accordion} from 'react-bootstrap';

import Icon from '@material-ui/core/Icon';


import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import "./button.css";
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId,  setCurrentId, props }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', DateCom: new Date});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', DateCom: ''});
    

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  
  const [dateState, setDateState] = useState(new Date())

  const changeDate = (e) => {
    setDateState(e);
    setPostData({ ...postData, DateCom: dateState});
  };
/*
  const secondfun = (e) =>{
    setPostData({ ...postData, DateCom: e.target.value });
  }
  
*/  
    const[isOpen, setIsOpen] = useState(false);
  
  return (
    <Paper className={classes.paper}>
              <div className="center"> 
        < Typography align="center" variant="h6">{currentId ? `Editing "${post.title}"` :'Note Creator'}</Typography>
        </div>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
     
        <div className="floatright" fullWidth >

        <TextField  name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" multiline rows={12} fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
    </div>
   {/*   <div className="collaps">
      <Button className="toggle" onClick={() => setIsOpen(!isOpen)}>yeh </Button>
    {isOpen && <Calendar className="content"   onChange={changeDate} />}
     </div>

     <Card>
    <Card.Header>
      <Accordion.coggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  */}
  <div className="content">
  < Typography align="center" variant="h6">{currentId ? `Editing "${post.title}"` :'DateSelector'}</Typography>
  <Calendar onChange={changeDate} />
  </div>
        <Button className={classes.buttonSubmit} variant="contained"  size="large" type="submit" >  <CheckIcon style={{ fontSize: 30 }} />
  </Button>
  

        <Button className={classes.buttonSubmit} variant="contained"  size="small" onClick={clear} > <DeleteIcon style={{ fontSize: 30 }} /> 
        </Button>


      
    
      </form>

    
    </Paper>
  );
};

export default Form;
