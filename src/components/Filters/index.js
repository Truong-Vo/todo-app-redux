import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  filterTodo,
  priorityFilterChange,
  statusFilter,
} from '../redux/actions'

const { Search } = Input

export default function Filters() {
  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriorities, setFilterPriorities] = useState([])
  const dispatch = useDispatch()

  const handleSearchText = (e) => {
    // console.log(e.target.value)
    setSearchText(e.target.value)
    dispatch(filterTodo(e.target.value))
  }

  const handleStatusChange = (e) => {
    // console.log(e.target.value)
    setFilterStatus(e.target.value)
    dispatch(statusFilter(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setFilterPriorities(value)
    dispatch(priorityFilterChange(value))
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          value={filterPriorities}
          onChange={handlePriorityChange}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  )
}
