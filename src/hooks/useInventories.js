import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((result) => setInventories(result));
  }, [inventories,setInventories]);
  return [inventories, setInventories];
};

export default useInventories;
