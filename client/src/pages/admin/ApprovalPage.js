import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Table,message } from 'antd';

import { requestForApproval,updateRequest } from '../../apicalls/user';


function ApprovalPage({setLoading}) {


    const [request,setRequest] = useState([]);


 
    const getData = async ()=>{
        try{
            setLoading(true);
            const response = await requestForApproval();
            if(response.success){
              const requests = response.data;
              setRequest(
                requests.map(function(item){
                  return {...item, key: `user${item._id}`}
                })
                );
            }else{
              message.error(response.message)
            }
           setLoading(false);
    
          }catch(err){
            setLoading(false);
            message.error(err.message);
          }
       }


       const handleApprove = async (request)=>{
        try{
            setLoading(true);
            let values = {...request, requestId: request._id, isActive: !request.isActive}
            const response = await updateRequest(values);
            if(response.success){
                message.success(response.message);
                getData();
            }else{
                message.error(response.message)
            }
              setLoading(false);

            }catch(err){
                setLoading(false);
                message.error(err.message);
                }
            }



    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
       
       
        {
          title: 'Comment',
          dataIndex: 'comment',
          key: 'comment',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
            title: 'Appointment Date',
            dataIndex: 'appointment',
            key: 'appointment'
        },
        
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text, data) => {
            return(
              <div className='d-flex align-items-center gap-10'>
                { data.isActive ? <Button style={{backgroundColor:"green",color:"white"}}  >Confirmed</Button> : <Button style={{backgroundColor:"brown",color:"white"}} onClick={()=>handleApprove(data)}>Pending</Button>  }
              </div>
            )
          }
        }, 
      ];

      useEffect(()=>{
        getData();
      },[])
  return (
<>
{<Table dataSource={request} columns={columns} />}
</>
  )
}

export default ApprovalPage