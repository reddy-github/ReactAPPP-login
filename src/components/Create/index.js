import {
    Form,
    Input,
    Button,
    AutoComplete,
  } from 'antd';
  
import React, { useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router';
import './index.css'

import { Link } from 'react-router-dom';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateUser = () => {
  const [form] = Form.useForm();
/* 
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

   */

  let history = useNavigate();
  /*
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [phone,setPhone]=useState('');
  const [website,setWebsite]=useState(''); */
  
  const sendDataToAPI = (values) => {
    const {name, username, email, address, phone, website} = values
    axios.post(`http://jsonplaceholder.typicode.com/users`, {
      name,
      username,
      email,
      address,
      phone,
      website,
    }).then((response) => {
      console.log(response, "response")
    })
  }
  
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult([].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
      <div className='add-user'>
          <h1 className='heading-create-user'>Create User</h1>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={sendDataToAPI}
      scrollToFirstError
    >
        <Form.Item
        name="name"
        label="Name"
        
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="name"/>
      </Form.Item>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
            whitespace: true,
          },
        ]}
      >
        <Input  placeholder="username"/>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="email"/>
      </Form.Item>


      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please input your adresss!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="address"/>
      </Form.Item>
  
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
        placeholder="phone"
        />
      </Form.Item>
      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: 'Please input website!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
          <Input  placeholder="website" />
        </AutoComplete>
      </Form.Item>  
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit"   style={{ background: "#2b71fd", borderColor: "yellow",marginTop:"10px",height:"40px",width:"60px"}} >
          Add
          
        </Button>
        <Link to="/dashboard">
        <Button type="primary" htmlType="submit"   style={{ background: "#2b71fd", borderColor: "yellow",marginTop:"10px",marginLeft:"15px",height:"40px",width:"60px"}} >
          Back
          
        </Button>
        </Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default CreateUser;

