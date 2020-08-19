import React from "react";
import useStorage from "./hooks/useStorage";
import {useEffect} from 'react';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      progress
    </div>
  );
};

export default ProgressBar;
