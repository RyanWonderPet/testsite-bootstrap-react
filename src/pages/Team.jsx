import React from "react"
import MyTeam from "../components/Team/MyTeam";
import TeamBreadCrumb from "../components/Team/TeamBreadCrumb";


const Team = () => {
  return (
    <container fluid>
   <TeamBreadCrumb />
      <MyTeam/>
    </container>
 
  )
}

export default Team