import React from "react"
import TableCustomSlice from "./table/TableCustomSlice"
import TableServerSlice from "./table/TableServerSlice"

export default function Container() {
  return <div style={{
    margin:"50px auto",
    width:"80%"
  }}>
    <TableCustomSlice/>
    <TableServerSlice/>
  </div>
}
