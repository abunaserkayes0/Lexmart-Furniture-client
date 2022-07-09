import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://agile-depths-74212.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((result) => setInventories(result));
  }, [inventories,setInventories]);
  return [inventories, setInventories];
};

export default useInventories;
