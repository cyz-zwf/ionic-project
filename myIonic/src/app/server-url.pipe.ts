import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverUrl'
})
export class ServerUrlPipe implements PipeTransform {

  private url = 'http://www.codeboy.com/'

  transform(value, mode = "prepend") {
    if(!value){return ""} //防止尚未获得数据
    if (mode === 'prepend') {
      //把一个形如img/1.jpg相对的地址转换为 http:www.codeboy.com/img/1.jpg
      return this.url + value;
    } else if (mode === 'replace') {
      //把一个形如<div><img src="img/1.jpg">...<img src=".."></div> 的字符串
      //替换 
      //<div><img src="http://www.codeboy.com/img/1.jpg"></div>
      return value.replace(/src="img/g , `src="${this.url}img`)
    }
  }
}
