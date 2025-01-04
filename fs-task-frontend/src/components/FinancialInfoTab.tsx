import React from 'react';
import {Button} from "@mui/material";

const FinancialInfoTab = () => {
  return (
    <>


    <div className="bg-white p-6 rounded border shadow rounded mb-4" style={{gap:'4px', marginRight:"15px"}}>

         <div className="flex justify-between items-center" >
          <h2 className="text-lg font-semibold text-navy-400 mb-4">Bank Information</h2>
           <Button className="edit-button" style={{ textTransform: 'none' }} variant="contained">Edit</Button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div style={{margin: '4px'}}>
            <p className="text-sm font-weight-400 text-gray-500">Bank Name</p>
            <p className="text-lg font-semibold text-navy-400">CIB</p>
          </div>
          <div style={{margin: '4px'}}>
            <p className="text-sm font-weight-400 text-gray-500">IBAN</p>
            <p className="text-lg font-semibold text-navy-400">12346546413216446</p>
          </div>
        </div>
    </div>


    </>
  );
};

export default FinancialInfoTab;