import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //服务器的域名
  public server = 'http://www.codeboy.com/'
  //首页数据
  public indexApi = this.server+'data/product/index.php'
  //商品列表
  public productApi = this.server + 'data/product/list.php'
  //商品详情
  public productDetailApi= this.server+'data.product/details'
  //用户登录
  public userLogerApi = this.server+'data/user/login.php'
  //用户注册
  public userRegsiterApi = this.server+'data/user/register.php'

  constructor() { }
}
