import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post$: Observable<any>;
  constructor(private _http: HttpClient, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.post$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params.get('id'));
        const url =
          'https://knochenbruchgilde.firebaseio.com/posts/' +
          params.get('id') +
          '.json';
        return this._http.get(url);
      }),
    );
    this._route.paramMap.subscribe((params: ParamMap) =>
      console.log(params.get('id')),
    );
  }
}
