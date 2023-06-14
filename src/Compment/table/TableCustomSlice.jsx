import React from "react"
import { Table } from "antd"
import useTableList from "../../hooks/useTableList"
const { Column } = Table

export default function TableCustomSlice() {
  const { dataList } = useTableList("")
  return (
    <>
      <Table dataSource={dataList}>
        <Column title="Id" dataIndex="id" key="Id" />
        <Column title="Name" dataIndex="name" key="Name" />
        <Column title="Age" dataIndex="age" key="Age" />
        <Column title="Gender" dataIndex="gender" key="Gender" />
        <Column title="Phone" dataIndex="phone" key="Phone" />
      </Table>
    </>
  )
}
