import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _httpClient: HttpClient, private _loginService: LoginService) {
  }

  ngOnInit() {
    this._loginService.login('yariv', '1224324').subscribe((jsonFromServer) => {
      
      this._httpClient.get('https://nztodo.herokuapp.com/api/task/?format=json', {
      }).subscribe((jsonFromServer) => {

      });
    })

    // this._httpClient.get('https://nztodo.herokuapp.com/api/task/?format=json', {
    //   headers: {
    //     'Authorization': 'hello'
    //   }
    // }).subscribe((jsonFromServer) => {

    // });

    this._httpClient.post('https://nztodo.herokuapp.com/api/task/', {
      title: 'new todo', 
      description: 'sadf', 
      group: 'asdf', 
      when: (new Date().toISOString)}).subscribe(() => {
    })
  }
}
