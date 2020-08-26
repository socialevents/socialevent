import React from "react";
// import useFirestore from "../upload/hooks/useFirestore";
import { motion } from "framer-motion";
import {withRouter} from 'react-router-dom';

const UserImageGrid = ({ setSelectedImg, match }) => {
  

  return (
    <div className="img-grid">
   
      {match.params.profile_pics &&
        match.params.profile_pics.map((doc) => {
          console.log(doc);
          return (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc)}
          >
             
            <motion.img
              src={doc}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          
        )})}
     
    </div>
  );
};

export default withRouter(UserImageGrid);
