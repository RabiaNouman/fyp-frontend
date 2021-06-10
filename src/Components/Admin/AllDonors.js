import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function AllDonors(){

  let [donors, setDonors] = useState([]);

  useEffect(() => {
    return fetch(`/donor`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 404) {
        console.log("No donor is found....");
      } else {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setDonors(data);
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      {console.log("donors")}
      {console.log(donors)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Donors List <span className="title-under"></span>
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <div>
            <Table className="styled-table">
              <Thead>
                <Tr>
                  <Th>Donor Name</Th>
                  <Th>Email</Th>
                  <Th>Phone Number</Th>
                  <Th>Address</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {donors.map((r) => (
                  <Tr>
                    <Td>{r.donorname}</Td>
                    <Td>{r.email}</Td>
                    <Td>{r.phoneNumber}</Td>
                    <Td>{r.address}</Td>
                    <Td><button>Edit</button></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AllDonors;