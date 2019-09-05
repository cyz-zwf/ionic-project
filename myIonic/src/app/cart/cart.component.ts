import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  //待出现的购物车编号--来自语商品列表详情页面
  private lid = "";
  //待查询的商品对象
  private product = {}

  constructor(
    private http : HttpClient,
    private api : ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //组件初始化完成,立即异步请求商品信息
    // this.route.params.subscribe((data)=>{
    //   this.lid=data.lid
    //   console.log(this.api.productDetailApi+'.php?lid='+this.lid)
    //   this.http.get(this.api.productDetailApi+'.php?lid='+this.lid).subscribe((res:any)=>{
    //     console.log(res)
    //     this.product = res.details
    //   })
    // })
  }

}
