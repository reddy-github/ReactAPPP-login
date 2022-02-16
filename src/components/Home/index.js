import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import "./index.css"

const Home = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='container'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        style={{ marginBottom:"20px",color:"red",}} 
      >
        <Input
         prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        style={{ marginBottom:"20px",color:"red",}} 
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <div>
      
      <Form.Item>

      <Button type="primary" htmlType="submit" className="login-form-button" 
      style={{ background: "transpent", color:"#ffffff",marginTop:"40px",fontWeight:"400"}}>
          Signup
        </Button>
        <Link to='/dashboard'>
          
        <Button type="primary" htmlType="submit" className="login-form-button"  
        style={{ background: "#4f46e5", color: "#ffffff",marginTop:"40px",marginLeft:"25px",height:"30px",
        width:"90px",borderRadius:"10px",fontWeight:"400"}}>
          Log in
        </Button>
        </Link>
        
        
      </Form.Item>
      </div>
    </Form>
    </div>
  );
};

export default Home;