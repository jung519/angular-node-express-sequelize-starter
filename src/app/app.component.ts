import { Component } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gmi'
  dataList: any
  constructor(
    private http: HttpClient
  ) {
    this.getTestDataList()
  }

  getTestDataList() {
    const fn = (): Observable<any> => {
      return this.http.get<any>('http://localhost:3000/test/test')
      .pipe(tap(v => {
        return v
      }))
    }
    console.log('123')
    fn().subscribe(v => {
      this.dataList = v
    })
    console.log(this.dataList)
  }


}
