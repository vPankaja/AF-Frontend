import { Button } from "react-bootstrap";
import React, { useEffect } from "react";

export default function AdminView() {
  const handelLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    var userData = localStorage.getItem("user");

    if (!userData) {
      handelLogout();
    }
  }, []);

  return (
    <div>
      <h1>adminView</h1>
      <Button onClick={handelLogout}>Logout</Button>
    </div>
  );
}
