import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BASIC_INFO } from '../graphql/queries.ts';

const BasicInfoCard = ({ activeTab, setActiveTab }) => {
  const { data, loading, error } = useQuery(GET_USER_BASIC_INFO, {
    variables: { userId: 1 },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const user = data.user;

  return (
    <div className="bg-white shadow-md section">
      <div className="inner-section1">
        <img
          src={require("./pic2.png")}
          alt="info"
          style={{ maxWidth: "120px", height: "120px", paddingBottom: "10px" }}
        />
        <div className="inner-name">
          <h1 style={{ color: "#051D49", fontSize: "20px", fontWeight: "600", lineHeight: "30px", paddingBottom: "10px" }} className="font-semibold">
            {user.firstName} {user.familyName}
          </h1>
          <h2 style={{ color: "#737791", fontSize: "16px", fontWeight: "400", lineHeight: "20px" }}>Senior Product Manager</h2>
        </div>
      </div>
      <hr />
      <div style={{ paddingTop: "30px" }} className="inner-section2">
        <div onClick={() => setActiveTab('personal')} style={{ width: "345px", height: "59px", borderRadius: "8px", padding: "16px", backgroundColor: activeTab === 'personal' ? '#F4F8FE' : '#FFFFFF', cursor: 'pointer' }}>
          <h1 style={{ width: "313px", height: "27px", fontWeight: "500", fontSize: "18px", lineHeight: "27px", color: activeTab === 'personal' ? '#0F6CBD' : '#000000' }}>Personal Information</h1>
        </div>
        <div onClick={() => setActiveTab('financial')} style={{ width: "345px", height: "59px", borderRadius: "8px", padding: "16px", backgroundColor: activeTab === 'financial' ? '#F4F8FE' : '#FFFFFF', cursor: 'pointer' }}>
          <h1 style={{ width: "313px", height: "27px", fontWeight: "500", fontSize: "18px", lineHeight: "27px", color: activeTab === 'financial' ? '#0F6CBD' : '#000000' }}>Financial Information</h1>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoCard;