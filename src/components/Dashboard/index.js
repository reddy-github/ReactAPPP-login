import axios from 'axios';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './index.css'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from '@chakra-ui/react'

 function Dashboard() {
  const [dataTable, setDataTable] = useState([]);
  const api='https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios.get(api)
      .then(res => setDataTable(res.data))
      
      .catch(err => console.log(err))
  }, []); console.log(dataTable)

  return (

          <div>
            <div className='header'> 
            <Link to='/createUser'>
            <Button>Add User</Button>
            </Link>

            <Link to='/'>
            <Button>Logout</Button>
            </Link>
              
            </div>


            <Table>
              <Thead>
                <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Adress</Th>
                <Th>Phone</Th>
                <Th>Website</Th>
                </Tr>
              </Thead>
              
              <Tbody>
                {dataTable.map((data)=>{

                  return (

                    
                    <Tr>
                     
                        <Td>{data.id}</Td>
                        <Link to='dataTable{data.id}' >
                        <Td> {data.name}</Td>
                        </Link>
                        
                        <Td>{data.username}</Td>
                        <Td>{data.email}</Td>
                        <Td>{`${data.address.city}`}</Td>
                        <Td>{data.phone}</Td>
                        <Td>{data.website}</Td>
                        
                    </Tr>
                   
                  )
                })
            }
              </Tbody>
            </Table>

         </div>
  )
          }

export default Dashboard;
