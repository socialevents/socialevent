import React from "react";
// import useFirestore from "../upload/hooks/useFirestore";
import { motion } from "framer-motion";
import {connect} from 'react-redux';

const ImageGrid = ({ setSelectedImg, user }) => {
  // const { docs } = useFirestore("users", user.id);
  console.log(user.profile_pics);

  return (
    <div className="img-grid">
      {user.profile_pics &&
        user.profile_pics.map((doc) => {
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
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps)(ImageGrid);
