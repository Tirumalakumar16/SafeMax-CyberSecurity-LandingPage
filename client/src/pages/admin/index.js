import React from 'react'
import ApprovalPage from './ApprovalPage';
import { Tabs } from 'antd';

function Profile({setLoading}) {
    setTimeout(() => {
        setLoading(false);
    }   , 1000);
    const items = [
        {
          key: "1",
          label: "Request",
          children: <ApprovalPage setLoading={setLoading}/>,
        },
       
        // {
        //   key: '3',
        //   label: 'Tab 3',
        //   children: 'Content of Tab Pane 3',
        // },
      ];

      const onChange = (key) => {
        console.log(key);
      };
  return (
    <>
    <div style={{padding:"20px"}}>
    <h1>Welcome to Admin panel!</h1>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    </>
  )
}

export default Profile