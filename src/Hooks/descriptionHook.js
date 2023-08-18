import { useState, useEffect } from "react";
import axios from "axios";

const DescriptionHook = (descriptionurl) => {
  const [descriptionData, setDescriptionData] = useState([]);
  const [descriptionLoading, setDescriptionLoading] = useState(true);
  const [descriptionError, setDescriptionError] = useState(null);



  useEffect(() => {
    axios
      .get(descriptionurl)
      .then((response) => {
        setDescriptionData(response.data);
        setDescriptionLoading(false);
      })
      .catch((error) => {
        setDescriptionError(error);
        setDescriptionLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return { descriptionData, descriptionLoading, descriptionError };
};

export default DescriptionHook;
