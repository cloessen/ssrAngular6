import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CkeditorConfigService } from '../ckeditor-config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit{
  public editorValue = '<p>Hello world!</p>';
  public myCkeditorConfig: any;

  isPreview = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private ckService: CkeditorConfigService, private breakpointObserver: BreakpointObserver) {}
ngOnInit() {
  this.myCkeditorConfig = this.ckService.getConfig(150);

}
  showContent() {
    this.isPreview = !this.isPreview;
  }
}
