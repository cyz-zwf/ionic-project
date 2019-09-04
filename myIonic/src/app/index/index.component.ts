import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { TouchSequence } from 'selenium-webdriver';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  private carouselItems = []; //轮播广告数据
  private newArrialItems = []; //新品上市数据
  private topSaletems = []; //热销单品数据
  private recommendedItems = []; //首页推荐数据
  private slideOptions = {//轮播广告选项对象
    initialSlide: 0, //初始显示第几个广告
    speed: 400  //滑动速度(毫秒)
  };

  //在组件脚本中引用组件模板中的视图子组件
  @ViewChild(IonSlides, { static: true })  //'ion-slides'
 // @ViewChild('ion-slides', { static: true }) 
  private mySlides: IonSlides;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //首页组件初始化时,异步请求服务器端的首页数据
    let url = 'http://www.codeboy.com/data/product/index.php';
    this.http.get(url).subscribe((res: any) => {
      console.log(res)
      this.carouselItems = res.carouselItems;
      this.newArrialItems = res.newArrialItems;
      this.topSaletems = res.topSaletems;
      this.recommendedItems = res.recommendedItems;
      //开始轮播广告的自动播放
      //console.log(this.mySlides)
      this.mySlides.startAutoplay();
    })
  }

}
