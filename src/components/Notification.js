import React from 'react';
import { Alert } from '@mui/material';
import uiSlice, { uiActions } from '../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';


const Notification = () =>{
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () =>{
    dispatch(uiActions.showNotification({
      open:false
    }))
  };
  console.log("Notification: ",notification);
  return(
    <div>
      {notification.open && <Alert 
        severity={notification.type} onClose={handleClose}>{notification.msg} 
        </Alert>}
    </div>
  )
}
export default Notification;