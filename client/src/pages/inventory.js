import React from "react";
import InventoryTable from "../components/inventoryTable"
import AddParts from "../components/AddParts";

 
function Inventory() {
  return (
    <div>
      <InventoryTable />
      <br></br>
      <AddParts/>
    </div>
  );
}


export default Inventory;