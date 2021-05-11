import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { api } from "../../config/index";

export const View = (props) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(props.match.params._id);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(api + "/vizualizar/" + id);
        setData(response.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [id]);
  return (
    <div>
     
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
   
    </div>
  );
};
