import React from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const ProfileHeader = () => {
  return (
    <>
    <div className="flex prof">
      <div className='txt'> 
        <p className="text-3xl">John Smith Profile</p>
      <div className="flex space-x-2 items-center">
        <div className='dash'>
          <p className="text-gray-600"> Dashboard </p>
          <p className="text-cyan-400">&nbsp;&gt;&nbsp;</p>
        </div>
        <div className='hr'>
          <p className="text-gray-601"> HR manage </p>
          <p className="text-cyan-400">&nbsp;&gt;&nbsp;</p>
        </div>
        <div className='emp'>
          <p className="text-gray-602"> Employees </p>
          <p className="text-cyan-400">&nbsp;&gt;&nbsp;</p>
        </div>
        <p className="text-cyan-800"> John Smith Profile </p>
      </div>
      
      </div>
       <div className="flex items-center cont widget" style={{ color: "#004A3F" }}>
        <div style={{width:"48px", height: "40px"}}> <NotificationsOutlinedIcon/></div>
        <div style={{width:"48px", height: "40px"}}> <MailOutlineIcon/></div>
        <div style={{width:"48px", height: "40px"}}> <SettingsOutlinedIcon/></div>
      <img
        src={require("./pic.png")}
        alt="Profile"
        className="rounded-full"
        style={{width:"40px", height: "40px"}}
      />
      </div>
    </div>
    </>
  );
};

export default ProfileHeader;
