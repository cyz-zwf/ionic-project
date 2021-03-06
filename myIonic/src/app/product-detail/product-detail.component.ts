import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  //待出现的商品编号--来自于商品列表页面
  private pid= "";
  //待查询的商品对象
  private product = {}

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private nav:NavController,
    private alertController: AlertController ,//弹窗
    ) { }

    goBack(){
      this.nav.back(); //返回上一级
    }
    doclick(){
      this.alertController.create({
        message:'添加成功'
      }).then((dialog) => {
        //对话框创建并挂载到DOM数完成,开始呈现它
        dialog.present()
      })
    }
  ngOnInit() {
    //组件化初始化完成,立即异步请求商品信息
    this.route.params.subscribe((data)=>{
      this.pid=data.pid 
      //console.log('待查询的商品编号' , this.pid)
      let url = "http://www.codeboy.com/data/product/details.php?lid="+this.pid;
      this.http.get(url).subscribe((res :any)=>{
        console.log(res)
        this.product = res.details
        console.log(this.product)
      })
    })
  }

}
