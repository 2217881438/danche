import React from 'react'
import { Button, Card, Modal } from 'antd';
import './ui.less'

export default class Buttons extends React.Component {

    state = {
        showModel1:false,
        showModel2:false,
        showModel3:false,
        showModel4:false,
    }

    handleOpen = (type)=>{
        this.setState({
            [type]:true
        })
    }

    handleConfirm = (type)=>{
        Modal[type]({
            title:'确认?',
            content:"你确定你学会了React了吗?",
            onOk(){
                console.log('OK')
            },
            onCancel(){
                console.log('Cancel')
            }
        })
    }

    render (){
        return (
            <div className='main-wrap'>
                <Card title="基础模态框" className="card-wrap">
                    <Button type='primary' onClick={() =>this.handleOpen('showModal1')}>Open</Button>
                    <Button type='primary' onClick={() =>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() =>this.handleOpen('showModal3')}>顶部20px弹窗</Button>
                    <Button type='primary' onClick={() =>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="基础模态框" className="card-wrap">
                    <Button type='primary' onClick={() =>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type='primary' onClick={() =>this.handleConfirm('info')}>Info</Button>
                    <Button type='primary' onClick={() =>this.handleConfirm('success')}>Success</Button>
                    <Button type='primary' onClick={() =>this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModel1}
                    onCancel={()=>{
                        this.setState({
                            showModel1:false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModel2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModel2:false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModel3}
                    onCancel={()=>{
                        this.setState({
                            showModel3:false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName='vertical-center-modal'
                    visible={this.state.showModel4}
                    onCancel={()=>{
                        this.setState({
                            showModel4:false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
            </div>
        )
    }

}