import React from "react";
import { Card, Form, Input, Button, message, Checkbox } from "antd";
import { UserOutlined, MedicineBoxOutlined } from '@ant-design/icons';

// export default class Login extends React.Component {
    // onSubmitbt = () => {
    //     console.log(this.myForm.validateFields);
    //     let userInfo = this.myForm.getFieldsValue();
    //     console.log(userInfo);
    //     this.myForm
    //         .validateFields()
    //         .then((values) => {
    //             /*values:{
    //           username: 'username',
    //           password: 'password',*/
    //             message.success(
    //                 `${userInfo.username}恭喜你,您通过本次表单学习,您的密码为${userInfo.password}`
    //             );
    //         })
    //         .catch((errorInfo) => {
    //             console.log(errorInfo);
    //             /*
    //             errorInfo:
    //               {
    //                 values: {
    //                   username: 'username',
    //                   password: 'password',
    //                 },
    //                 errorFields: [
    //                   { name: ['password'], errors: ['Please input your Password!'] },
    //                 ],
    //                 outOfDate: false,
    //               }
    //             */
    //         });
    // };
export default class Login extends React.Component {
    onFinish = (values) => {
        console.log('Success:',values);
        message.success(`“${values.username}”恭喜你,通过了表单组件的学习,您的密码为:${values.password}`);
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:',errorInfo);
    }

    render() {
        const FormItem = Form.Item;
        return (
            <div style={{ width: '100%' }}>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form style={{ width: 300 }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >

                        <FormItem
                            name="userName"
                            rules={[
                                {
                                    required: true,
                                    initialValue:"123456",
                                    message: "用户名不能为空!",
                                },
                                { min: 5, max: 10, message: "长度不符合规则" },
                                // {
                                //     pattern:/^\w+$/g,
                                //     message:"用户名必须是字母或数字且字母开头"
                                // }
                                {
                                    pattern: new RegExp("\\w+$", "g"),
                                    message: "用户名必须是字母或数字",
                                },
                            ]}
                        >
                            <Input icon={<UserOutlined />} placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    initialValue:"12345678",
                                    message: "请输入密码!",
                                },
                            ]}
                        >
                            <Input.Password icon={<MedicineBoxOutlined />} placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <FormItem
                                name="remember"
                                valuePropName="checked"
                                initialValue={true}
                                noStyle
                            >
                                <Checkbox>记住密码</Checkbox>
                            </FormItem>
                            <a href="#" style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}