import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Dashboard() {
  var id;
  let [donations, setDonations] = useState([]);

  useEffect(() => {
    id = localStorage.getItem("loginId");
    console.log(id);

    return fetch(`/donation/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=>{
      console.log(res);
      setDonations(res.data)
      console.log(donations)
    })
    .catch(err=>{
      console.log(err);
    })
    // .then((response) => {
    //   if (response.status === 404) 
    //   {
    //     console.log("No donation is found....");
    //   } 
    //   else 
    //   {
    //     console.log(response);
    //     response.json().then((data) => {
    //       //StoreDonationData(data);
    //       console.log(data);
    //       setDonations([data]);
    //       console.log("donation ka data");
    //       console.log(donations);
    //     });
    //   }
    // });
    //setDonations(data);
    //console.log(donations);
  }, []);

  function donateNow() {
    window.location.href = "/donate";
  }

  function StoreDonationData(data) {}

  function GetDonationData() {
    // id = localStorage.getItem("loginId");
    // console.log(id);
    // return fetch("/donation/:id", {
    //   method: "get",
    //   //body: JSON.stringify(id),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   if (response.status === 404) {
    //     console.log("No donation is found....");
    //   } else {
    //     console.log(response);
    //     response.json().then((data) => {
    //       StoreDonationData(data);
    //     });
    //   }
    // });
  }
  return (
    <div>
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <button
            onClick={donateNow}
            className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
            data-toggle="modal"
            data-target="#donateModal"
          >
            DONATE NOW
          </button>
          <h1 className="page-title">
            Donate Medicine to Help Needy Persons{" "}
            <span className="title-under"></span>
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div>
          {/* <ul>
            {donations.map(donation=>(
              <li key={donation.id}>{donation.medname}</li>
            ))
            }
          </ul> */}
          {/* <Table>
            <Thead>
              <Tr>
                <Th>Medicie Name</Th>
                <Th>Medicine Mg</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Tablescon</Td>
                <Td>9 April 2019</Td>
                <Td>East Annex</Td>
              </Tr>
            </Tbody>
          </Table> */}
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
