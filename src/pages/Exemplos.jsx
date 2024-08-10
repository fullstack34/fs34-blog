
import { useState } from "react";

export default function Exemplos() {

  const [email, setEmail] = useState();

  return (
    <>
      <form action="">
        <label htmlFor="">Email</label>
        <br />
        <input type="text" className="border" onChange={(event) => setEmail(event.target.value)} />
      </form>
      <br />
      <hr />
      <h4>Output: {email}</h4>
    </>
  );
}