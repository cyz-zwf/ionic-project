import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private productList = []; //商品列表
  private pno = 0; //当前加载到的页号
  private hasMore = true; //还有更多吗?

  //获取模板中无限滚动组件的引用
  @ViewChild(IonInfiniteScroll, { static: false })
  private myScroll: IonInfiniteScroll;


  constructor(
    private nav: NavController,
    private http: HttpClient,

  ) { }

  goBack() {
    //返回历史记录中的上一个页面
    this.nav.back(); // ionic 提供了NavController
  }
  ngOnInit() {
    this.pno++;
    let url = 'http://www.codeboy.com/data/product/list.php?pno=' + this.pno;
    this.http.get(url).subscribe((res: any) => {
      console.log(res)
      this.productList = this.productList.concat(res.data)
    })
  }
  loadMore() {
    this.pno++;
    let url = 'http://www.codeboy.com/data/product/list.php?pno=' + this.pno;
    this.http.get(url).subscribe((res: any) => {
      console.log(res)
      this.productList = this.productList.concat(res.data);
      this.myScroll.complete();//隐藏无限滚动组件
      if(this.pno>=res.pageCount){
        this.hasMore = false  //没有更多数据
      }
      
    })
  }


  }
