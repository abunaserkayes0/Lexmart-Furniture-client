import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-basin-78335.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((result) => setInventories(result));
  }, [inventories,setInventories]);
  return [inventories, setInventories];
};

export default useInventories;
