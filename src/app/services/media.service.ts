import { Injectable } from '@angular/core';
// import {image, name, seed} from 'fak';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

export interface MediaMetadata {
  label: string;
  id: any;
  imageUrl?: string;
  airDate?: Date;
  onAir?: boolean;
}

export interface MediaItem {
  id: string;
  show: MediaMetadata;
  episode: MediaMetadata;
  imageUrl?: string;
}

const baseUrl = 'https://api.dailymotion.com';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  limit = 8;
  constructor(private http: HttpClient) {}

  getVideoList() {
    return this.http
      .get<{ list: any[] }>(
        `${baseUrl}/user/scr/videos?limit=${this.limit}&fields=id,title,thumbnail_240_url,description`
      )
      .pipe(
        map(({ list }) => {
          console.log(list);
          return list;
        })
      );
  }

  getPlaylist(id = 'x6gd0m') {
    return this.http
      .get<{ list: any[] }>(
        `${baseUrl}/user/scr/playlist/${id}?limit=${this.limit}&fields=id,title,thumbnail_240_url,description`
      )
      .pipe(
        map(({ list }) => {
          console.log(list);
          return list;
        })
      );
  }

  getVideoDetails(id) {
    return this.http.get(`${baseUrl}/video/${id}`);
  }
}
