  
import React, { useEffect } from 'react';
import useStorage from '../upload/hooks/useStorage';
import { motion } from 'framer-motion';
import {connect} from 'react-redux';
import {getUser} from '../../../../redux/authReducer';



const ProgressBar = ({ file, setFile, user, getUser }) => {
  const { progress, url } = useStorage(file, user.id);

  useEffect(() => {
    if (url) {
      let newUser = {...user};
      console.log(newUser);
      newUser.profile_pics.push(url);
      getUser(newUser);
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(ProgressBar);