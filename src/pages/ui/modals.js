import React from 'react'
// import { Card, Button } from 'antd'
import { Button, Tooltip, Card, Radio } from 'antd';
import { SearchOutlined, 
    DownloadOutlined, 
    EditOutlined, 
    PlusCircleOutlined, 
    CloseCircleOutlined,
    LeftOutlined,
    RightOutlined 
 } from '@ant-design/icons';
import './ui.less'

export default class Buttons extends React.Component {
    render (){
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button>Open</Button>
                    <Button>自定义页脚</Button>
                    <Button>顶部20px弹窗</Button>
                    <Button>水平垂直居中</Button>
                </Card>
            </div>
        )
    }

}