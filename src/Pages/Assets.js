import React, {useState, useEffect} from 'react';
import { Table, Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';

const Assets = () => {

  const [assets, setAssets] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    // Fetch assets data from an API or database
    const fetchAssets = async () => {
      const response = await fetch('/api/assets');
      const data = await response.json();
      setAssets(data);
    };
    fetchAssets();
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: (text) => (searchedColumn === dataIndex ? <b>{text}</b> : text),
  });

  const columns = [
    {
      title: 'Asset ID',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Asset Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      ...getColumnSearchProps('category'),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      ...getColumnSearchProps('location'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ...getColumnSearchProps('status'),
    },
  ];

  return (
    <div>
 
    <div className='flex h-screen overflow-hidden'>
      <Sidebar/>
      <div className='w-full'>
      <Header/>
      <div className='h-screen mb-1 m-1 bg-blue-900 bg-rounded items-center px-3 rounded-md'>
      <h1 className="text-xl text-white font-bold">Employees</h1>
      <Table dataSource={assets} columns={columns} rowKey="id" />
      </div>
     </div>
    </div>
   
    </div>
  )
}

export default Assets

{/* <div>
        
        <div className='flex h-screen overflow-hidden'>
          <Sidebar/>
          <div className='w-full'>
          <Header/>
          <div className='h-screen mb-1 m-1 bg-blue-900 bg-rounded items-center px-3 rounded-md '>
          
          </div>
          
         </div>
        </div>
        
        </div>
  ) */}