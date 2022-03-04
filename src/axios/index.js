import axios from "axios";
import JsonP from 'jsonp'
import { Modal } from "antd";
import Utils from "../utils/utils";

export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function (err,response) {
                if(response.status == 'success'){
                    resolve(response);
                }else{
                    reject(response.message)
                }
            })
        })
    }


static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }
    let baseApi =
      "https://www.fastmock.site/mock/309cd6c072db152a8d1c9fb1b524930f/imooc";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "get",
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || "",
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById("ajaxLoading");
            loading.style.display = "none";
          }
        if (response.status === 200) {
          let res = response.data;
          if (res.code == "0") {
            resolve(res);
          } else {
            console.log(res);
            Modal.info({
              title: "提示",
              content: res.msg,
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }

}