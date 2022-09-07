import React, { useState } from "react";
import ContactList from "./contactList";

const Home = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  return <ContactList data={data} setData={setData} />;
};

export default Home;
