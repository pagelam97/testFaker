import React, { useRef } from "react"
import "./style/Main.scss"
import useRequest from "../hooks/useRequest"
// import useScrolledToBottom from "../hooks/useScrolledToBottom"

export default function Main() {
    console.log('render1');
  const { persionList } = useRequest()
  const Ref = useRef(null)
console.log('render3');
  return (
    <div ref={Ref}>
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "fixed",
          top: "0",
          backgroundColor:"red"
        }}>
        {persionList.length > 0
          ? `当前列表有${persionList.length}`
          : `当前还没有数据`}
      </div>
      {persionList.map((item, index) => {
        return (
          <ul key={index}>
            <li
              onClick={() => {
                console.log("dianle")
              }}>
              {item.name}
            </li>
            <li>{item.phone}</li>
            <li>{item.gender}</li>
          </ul>
        )
      })}
    </div>
  )
}
