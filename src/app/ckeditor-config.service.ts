import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CkeditorConfigService {

  constructor() { }
  public getConfig(height: number){
    return {
      customConfig: '/assets/custom-config.js',
      // height: height
    };
  }}
