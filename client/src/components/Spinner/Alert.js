import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Alert.css';
const Alert = () => {
    const dispatch = useDispatch();
    const alerts = useSelector(state=> state.alert);
  return (
    <div>
      {alerts !== null && alerts.length >0 && alerts.map(alert => (
        <div key={alert.id} className="alert">
          {alert.msg}
        </div>
      ))}
    </div>
  );
}

export default Alert;
