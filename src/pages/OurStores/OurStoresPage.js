import { useState } from "react";
import "./OurStoresPage.css";
import { Button } from "react-bootstrap";

const OurStores = () => {
  const [locations, setLocations] = useState([
    {
      name: "Charlotte, NC",
      src: "https://images.unsplash.com/photo-1507810670121-b08efd787765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcmxvdHRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      loc: "111 Charlotte Rd",
      phone: "111-111-1111",
      hours: "9am-7pm",
    },
    {
      name: "Philadelphia, PA",
      src: "https://images.unsplash.com/photo-1618312776768-c5926372a2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoaWxhZGVscGhpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      loc: "222 Philly Rd",
      phone: "222-222-2222",
      hours: "9am-7pm",
    },
    {
      name: "Chicago, IL",
      src: "https://images.unsplash.com/photo-1597933534024-debb6104af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      loc: "333 Chicago Rd",
      phone: "333-333-3333",
      hours: "9am-7pm",
    },
  ]);

  return (
    <>
      <h3 className="header-our-stores"> Shop By Location</h3>
      <div className="container-our-stores">
        {locations.map((val, k) => {
          return (
            <a href="#" key={k}>
              <h2 className="header-our-stores">{val.name}</h2>
              <img
                src={val.src}
                alt="locations"
                className="img"
                onClick={() => {}}
              />
              <p>Address: {val.loc}</p>
              <p>Phone: {val.phone}</p>
              <p>Hours: {val.hours}</p>
              <Button variant="outline-primary" size="lg">
                Get Directions
              </Button>
            </a>
          );
        })}
      </div>
    </>
  );
};
export default OurStores;
