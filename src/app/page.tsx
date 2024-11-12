"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(a + b);
  }, [a, b]);

  return (
    <div style={{ width: "15%", margin: "10px auto 0px" }}>
      <label>a: </label>
      <input
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          try {
            const a_value = Number(value);
            setA(a_value);
          } catch (err) {
            console.error("cannot convert to number: ", err);
          }
        }}
      />
      <br />
      <br />
      <label>b: </label>
      <input
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          try {
            const b_value = Number(value);
            setB(b_value);
          } catch (err) {
            console.error("cannot convert to number: ", err);
          }
        }}
      />
      <br />
      <br />
      <p>
        {a} + {b} = {result}
      </p>
    </div>
  );
}
