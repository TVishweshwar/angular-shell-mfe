import React from "react";
import { Third } from "./Third";

type Props = {};

function First({}: Props) {
  return (
    <>
      <Third />
      <h3 style={{ marginTop: "50px" }}>First Component</h3>
    </>
  );
}

export default First;
