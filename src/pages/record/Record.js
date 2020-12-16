import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Record.css'
import { Form, Input, Button, Checkbox , InputNumber} from 'antd';

export default function Record() {
    const [formObject, setFormObject] = useState({
        name: "",
        cookTime: "",
        ingredients: "",
        step1: "",
        step2: "",
        step3: "",
        step4: "",
    });
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    function handleInputChangeSelect(value) {
        setFormObject({ ...formObject, category: (value) })
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };

    return (
        <div>
            <Navbar/>
            <h1>record recipe</h1>
            <Form
                 {...layout}
                name="basic"
                initialValues={{ remember: true }}
                >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input the Name of Recipe!' }]}
                >
                    <Input 
                        placeholder="Name of Recipe"
                        value={handleInputChange}
                    />
                </Form.Item>
                <Form.Item
                    name="cookTime"
                >
                    <Input 
                        placeholder="cookTime"
                        value={handleInputChange}
                    />
                </Form.Item>
                <Form.Item
                    name="ingredients"
                >
                    <Input 
                        placeholder="ingredients"
                        value={handleInputChange}
                    />
                </Form.Item>
                <Form.Item
                    name="step 1"
                >
                    <Input.TextArea 
                        placeholder="step 1"
                        value={handleInputChange}
                    />
                </Form.Item>
                <Form.Item
                    name="step 2"
                >
                    <Input.TextArea 
                        placeholder="step 2"
                        value={handleInputChange}
                    />
                </Form.Item>
                <Form.Item
                    name="step 3"
                >
                    <Input.TextArea
                        placeholder="step 3"
                        value={handleInputChange}
                    />
                </Form.Item>
                <Form.Item
                    name="step 4"
                >
                    <Input.TextArea 
                        placeholder="step 4"
                        value={handleInputChange}
                    />
                </Form.Item>
            </Form>
        </div>
    )
}
