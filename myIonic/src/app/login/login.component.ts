import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private uname = ""; //用户输入的登录名
  private upwd = ""; //用户输入的登录密码
  constructor(
    private http: HttpClient,
    private api: ApiService,
    private alertController: AlertController ,//弹窗
    private nav:NavController
  ) { }
  goBack(){
    this.nav.back(); //返回上一级
  }
  doLogin() {
    //console.log(this.uname)
    //console.log(this.upwd)
    //向服务器端发起异步请求post请求
    let body = `uname=${this.uname}&upwd=${this.upwd}`
    let option = { //可用于修改请求头部选项对象
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    this.http.post(this.api.userLogerApi, body, option).subscribe((res: any) => {
      console.log(res)
      if (res.code == 200) {
        // alert('登录成功')
        this.alertController.create({
          header: '登录成功',
          message: '欢迎回来' + this.uname,
          buttons: ['ok']
        }).then((dialog) => {
          //对话框创建并挂载到DOM数完成,开始呈现它
          dialog.present()
        })
      } else {
        // alert('登录失败')
        this.alertController.create({
          header: '登录失败',
          message: '请重新输入',
          buttons: ['ok']
        }).then((dialog) => {
          //对话框创建并挂载到DOM数完成,开始呈现它
          dialog.present()
        })
      }
    })
  }
  ngOnInit() { }

}
