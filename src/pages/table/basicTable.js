import React from 'react';
import { Card, Table, Modal, Button, message } from "antd";
import axios from "./../../axios";
// import axios from "axios";
import Utils from "../../utils/utils";
export default class Basictable extends React.Component {
    state = {
        dataSource: null,
        // dataSource1: null,
        // selectedRowKeys: [], //选中当前行的key值
        // selectedItem: [],
        // selectedRows: [],
      };
    componentDidMount() {
        let data = [
          {
            id: "0",
            userName: "Tom",
            sex: 1,
            state: "1",
            interest: "1",
            birthday: "2000-01-01",
            address: "北京市海淀区奥林匹克公园",
            time: "09:00",
          },
          {
            id: "1",
            userName: "BOb",
            sex: 1,
            state: "1",
            interest: "1",
            birthday: "2000-01-01",
            address: "北京市海淀区奥林匹克公园",
            time: "09:00",
          },
          {
            id: "2",
            userName: "lucy",
            sex: 2,
            state: "1",
            interest: "1",
            birthday: "2000-01-01",
            address: "北京市海淀区奥林匹克公园",
            time: "09:00",
          },
        ];
       
        this.setState({
            dataSource: data,
          })
        this.request();
    }

    request = ()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                }
            }
        }).then((res)=>{
            if(res.code == 0){
                this.setState({
                    dataSource2:res.result
                })
            }
        })
    }

    // request = () => {
    //     let baseUrl = 'https://www.fastmock.site/mock/309cd6c072db152a8d1c9fb1b524930f/imooc'
    //     axios.get(baseUrl+'/table/list').then((res)=>{
    //         console.log(JSON.stringify(res));
    //     })
         
    //   };
    
    render(){
        const columns = [
            {
              title: "id",
              dataIndex: "id",
            },
            {
              title: "用户名",
              dataIndex: "userName",
            },
            {
              title: "性别",
              dataIndex: "sex",
             
            },
            {
              title: "状态",
              dataIndex: "state",
              
            },
            {
              title: "爱好",
              dataIndex: "interest",
            },
            {
              title: "生日",
              dataIndex: "birthday",
            },
            {
              title: "地址",
              dataIndex: "address",
            },
            {
              title: "早起时间",
              dataIndex: "time",
            },
          ];
        return(
            <div style={{width:"100%"}}>
                <Card title="基础静态数据表格">
          <Table
            columns={columns} //定义列
            dataSource={this.state.dataSource} //数据源?
            pagination={false} //关闭分页
            bordered //加边框
          />
        </Card>
        <Card title="基础动态数据表格" style={{ marginTop: 10 }}>
          <Table
            columns={columns} //定义列
            dataSource={this.state.dataSource2} //数据源
            pagination={false} //关闭分页
            bordered //加边框
          />
        </Card>
            </div>
        )
    }
}







