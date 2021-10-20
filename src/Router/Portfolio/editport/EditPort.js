import React from "react";
import styled from "styled-components";
import { BiBuildingHouse } from "react-icons/bi";

const Cen = styled.div`
  margin-top: 9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Ti = styled.p`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-weight: 600;
`;

const EditPort = () => {
  return (
    <Cen>
      <BiBuildingHouse />
      <Ti>Building...</Ti>
      <p>This Page is not finish yet.</p>
    </Cen>
  );
};

export default EditPort;
