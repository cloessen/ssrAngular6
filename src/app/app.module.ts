import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { CKEditorModule } from 'ngx-ckeditor';
import { KeepHtmlPipe } from './keep-html.pipe';
import { FormsModule } from '../../node_modules/@angular/forms';
import { CkeditorConfigService } from './ckeditor-config.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavigationComponent,
    KeepHtmlPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-starter' }),
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CKEditorModule,
  ],
  providers: [CkeditorConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
