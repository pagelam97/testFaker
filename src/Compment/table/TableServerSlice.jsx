/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

import { Button, Table } from "antd"
import useTableList from "../../hooks/useTableList"
import { useState } from "react"
const { Column } = Table

export default function TableServerSlice() {
  const [currentPage, setCurrentPage] = useState(1)
  const { dataList } = useTableList(currentPage)

  const handleClick = (num) => {
    setCurrentPage(num)
  }

  return (
    <>
      <Table
        dataSource={dataList}
        pagination={{
          showSizeChanger: false,
          pageSize: 500,
          hideOnSinglePage:true
        }}>
        <Column title="Id" dataIndex="id" key="Id" />
        <Column title="Name" dataIndex="name" key="Name" />
        <Column title="Age" dataIndex="age" key="Age" />
        <Column title="Gender" dataIndex="gender" key="Gender" />
        <Column title="Phone" dataIndex="phone" key="Phone" />
        {/* <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        /> */}
        {/* <Column
          title="Action"
          key="action"
          render={(_, record) => {
            console.log(_)
            console.log(record)
            return (
              <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
              </Space>
            )
          }}
        /> */}
      </Table>
      <Button
        onClick={() => {
          handleClick(1)
        }}>
        1
      </Button>
      <Button
        onClick={() => {
          handleClick(2)
        }}>
        2
      </Button>
      <Button
        onClick={() => {
          handleClick(3)
        }}>
        3
      </Button>
      <Button
        onClick={() => {
          handleClick(4)
        }}>
        4
      </Button>
      <Button
        onClick={() => {
          handleClick(5)
        }}>
        5
      </Button>
    </>
  )
}
