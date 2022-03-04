import React from 'react';
import { Card, Table, Modal, Button, message } from "antd";
import axios from "./../../axios";
// import axios from "axios";
import Utils from "./../../utils/utils";
export default class Basictable extends React.Component {
    state = {
        dataSource2: [],
        // dataSource: null,
        // dataSource1: null,
        // selectedRowKeys: [], //选中当前行的key值
        // selectedItem: [],
        // selectedRows: [],
      };
      params = {
          page:1
      }

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

        data.map((item, index) => (item.key = index));//处理key值问题

        this.setState({
            dataSource: data,
          })
        this.request();
    }

    request = ()=>{
        let _this = this;
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                },
                // isShowLoading:false
            }
        }).then((res)=>{
            res.result.list.map((item, index) => (item.key = index));
            if(res.code == 0){
                this.setState({
                    dataSource2:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        //to-do
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
          title: "信息",
          content: `用户名：${record.userName}, key：${record.key}`,
        });
        this.setState({
          selectedRowKeys: selectKey, //选中当前行的key值
          selectedItem: record, //选中当前行信息
        });
      };

      handdleDelete = () => {
        let rows = this.state.selectedRows; //当前这行的信息
        let ids = [];
        rows.map((item) => {
          //遍历当前这行所有内容
          ids.push(item.id); //把id添加到数组中
        });
        Modal.confirm({
          title: "删除提示",
          content: `确定删除${ids.join(",")} 的数据嘛？`, //数组按照，分割成字符串
          onOk: () => {
            message.success("成功");
            this.request();
          },
        });
      };

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
              render(sex){
                  return sex == 1 ? '男':'女'
              }
            },
            {
              title: "状态",
              dataIndex: "state",
              render(state){
                  let config = {
                    '1':'咸鱼一条',
                    '2':'风华浪子',
                    '3':'北大才子',
                    '4':'百度FE',
                    '5':'创业者'
                  }
                  return config[state];
              }
            },
            {
              title: "爱好",
              dataIndex: "interest",
              render(abc) {
                let config = {
                    '1': '游泳',
                    '2': '打篮球',
                    '3': '踢足球',
                    '4': '跑步',
                    '5': '爬山',
                    '6': '骑行',
                    '7': '桌球',
                    '8': '麦霸'
                }
                return config[abc];
            }
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

          const { selectedRowKeys } = this.state;
          const rowSelection = {
            type: "radio",
            selectedRowKeys, //指定选中项的 key 数组，需要和 onChange 进行配合
          };
          const rowCheckSelection = {
            type: "checkbox",
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              this.setState({
                selectedRowKeys,
                selectedRows,
              });
            },
          };

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
        <Card title="单选动态数据表格" style={{ marginTop: 10 }}>
          <Table
            columns={columns} //定义列
            dataSource={this.state.dataSource2} //数据源
            pagination={false} //关闭分页
            bordered //加边框
            rowSelection={rowSelection} //单选多选
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                },
              };
            }}
          />
        </Card>
        <Card title="多选选动态数据表格" style={{ marginTop: 10 }}>
          <Button onClick={this.handdleDelete}>
                                        删除                         
          </Button>
          <Table
            columns={columns} //定义列
            dataSource={this.state.dataSource2} //数据源
            pagination={false} //关闭分页
            bordered //加边框
            rowSelection={rowCheckSelection} //单选多选
          />
        </Card>
        <Card title="分页动态数据表格" style={{ marginTop: 10 }}>
          <Table
            columns={columns} //定义列
            dataSource={this.state.dataSource2} //数据源
            pagination={this.state.pagination} //分页样式
            bordered //加边框
          />
        </Card>
            </div>
        )
    }
}







