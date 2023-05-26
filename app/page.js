"use client";
import { useState } from "react";

export default function Home() {
  const data = [{ varName: "My Arg", value: false }];
  const [dataVariables, setDataVariables] = useState(data);
  const [action, setAction] = useState("reset");
  const dataOperation = {
    operation: dataVariables[0].varName,
    value: {},
    header: "reset",
  };
  const [dataOperations, setDataOperations] = useState(dataOperation);
  const Option_argument = () => {
    return (
      <select
        name={dataVariables[0].varName}
        onChange={(e) => {
          setAction(e.target.value);
        }}
      >
        {/* <option value={action} disabled selected>
            select...
          </option> */}
        {dataVariables.map((item, index) => (
          <option key={index} value={item.varName}>
            {item.varName}
          </option>
        ))}
      </select>
    );
  };
  const Option_constant = () => {
    return (
      <select name={"constant"} onChange={(e) => {}}>
        <option value={false}>false</option>
        <option value={true}>true</option>
      </select>
    );
  };
  const Option_reset = () => {
    return (
      <select
        name={"reset"}
        onChange={(e) => {
          setAction(e.target.value);
        }}
      >
        <option value={"select..."} disabled selected>
          select...
        </option>
        <option value={"constant"}>constant</option>
        <option value={"argument"}>argument</option>
        <option value={"and"}>and</option>
        <option value={"or"}>or</option>
      </select>
    );
  };
  const Option_and = () => {
    return (
      <>
        <select
          name={"and"}
          onChange={(e) => {
            setAction(e.target.value);
          }}
        >
          <option value={"and"} selected>
            and
          </option>
          <option value={"constant"}>constant</option>
          <option value={"argument"}>argument</option>
          <option value={"or"}>or</option>
        </select>
        <ul style={{ listStyle: "none", margin: 0 }}>
          <li>
            <Option_reset />
          </li>
          <li>
            <Option_reset />
          </li>
        </ul>
      </>
    );
  };
  return (
    <>
      {dataVariables.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              value={item.varName}
              onChange={(e) => {
                let newArr = [...dataVariables];
                newArr[index].varName = e.target.value;
                setDataVariables(newArr);
              }}
            />
            <select
              name={item.varName}
              onChange={(e) => {
                let newArr = [...dataVariables];
                newArr[index].value = e.target.value;
                setDataVariables(newArr);
              }}
            >
              <option value={false}>false</option>
              <option value={true}>true</option>
            </select>
          </div>
        );
      })}
      <button
        style={{ marginBottom: "15px" }}
        type="button"
        onClick={() =>
          setDataVariables([
            ...dataVariables,
            { varName: "New Arg", value: false },
          ])
        }
      >
        + add arg
      </button>
      <br />
      {action === "reset" ? (
        <Option_reset />
      ) : action === "constant" ? (
        <Option_constant />
      ) : action === "argument" ? (
        <Option_argument />
      ) : action === "and" ? (
        <Option_and />
      ) : action === "or" ? (
        <Option_or />
      ) : (
        <> </>
      )}

      <button
        type="button"
        onClick={() => {
          setAction("reset");
        }}
      >
        x
      </button>
      <div style={{ marginTop: "20px" }}>result: {dataVariables[0].value}</div>
    </>
  );
}
