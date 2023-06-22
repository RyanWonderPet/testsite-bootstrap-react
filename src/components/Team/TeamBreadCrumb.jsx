import React from "react"




const TeamBreadCrumb = () => {
return(
<>
{/* Breadcrumb */}
<div className="bg-success">
    <div className="container  div-breadcrumb">
        <div className="row">
            <div className="col text-white div-active-page-title">Team</div>
            <div className="col text-white text-right div-breadcrumb">
                <a className="text-white" href="index.html">
                Home
                </a>{" "}
                / Team
            </div>
        </div>
    </div>
</div>
{/* Breadcrumb */}
</>
)
}
export default TeamBreadCrumb