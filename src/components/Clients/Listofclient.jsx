import React from "react";
import img from "../../img/myob.png";
import img1 from "../../img/lifegroups.png";
import img2 from "../../img/lilly.png";
import img3 from "../../img/myob.png";
import img4 from "../../img/citrus.png";
import img5 from "../../img/trustly.png";
import img6 from "../../img/oldendorff.png";
import img7 from "../../img/grabyo.png";
import "bootstrap/dist/css/bootstrap.min.css";





const Listofclient = () => {
  return (
    <>
   <div className="client">
  <div className="container pb-5 pt-5">
    <h5 className="text-center font-weight-bold">CLIENTS</h5>
    <hr className=" mb-4 border-success hr-indicator" />
    <div className="row">
      <table className="table container table-bordered">
        <tbody align="center">
          <tr>
            <td className="client1">
            <img src={img} className="img-fluid w-50" alt="myob" />
            </td>

            <td className="client2">
            <img src={img1} className="img-fluid w-50" alt="myob" />
            </td>

            <td className="client3">
            <img src={img2} className="img-fluid w-50" alt="myob" />
            </td>

            <td className="client4 ">
            <img src={img3} className="img-fluid w-50" alt="myob" />
            </td>

          </tr>
          <tr>

            <td className="client5 ">
            <img src={img4} className="img-fluid w-50" alt="myob" />
            </td>

            <td className="client6 ">
            <img src={img5} className="img-fluid w-50" alt="myob" />
            </td>

            <td className="client7 ">
            <img src={img6} className="img-fluid w-50" alt="myob" />
            </td>


            <td className="client8 ">
            <img src={img7} className="img-fluid w-50" alt="myob" />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  </>
  
  );
}

export default Listofclient;
