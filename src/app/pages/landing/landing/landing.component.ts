import { Component } from '@angular/core';
import { MediaService } from '../../../services/media.service';
import { VideoPlayerService } from '../../../shared/video-player/video-player.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  videos$ = this.mediaService.getVideoList();
  featured$ = this.mediaService.getPlaylist('x6gd0m');
  interviews$ = this.mediaService.getPlaylist('x6iutn');
  playlistList = [
    {
      label: 'Featured',
      resource$: this.mediaService.getPlaylist('x6gd0m')
    },
    {
      label: 'Latest',
      resource$: this.mediaService.getVideoList()
    },
    {
      label: 'Interviews',
      resource$: this.mediaService.getPlaylist('x6iutn')
    },
    {
      label: 'Live Performances',
      resource$: this.mediaService.getPlaylist('x6i7xv')
    },
    {
      label: 'Techno',
      resource$: this.mediaService.getPlaylist('x6j0at')
    },
    {
      label: 'House',
      resource$: this.mediaService.getPlaylist('x6j0au')
    },
    {
      label: 'Bass Music',
      resource$: this.mediaService.getPlaylist('x6j0aw')
    }
  ];

  constructor(private mediaService: MediaService, private videoPlayer: VideoPlayerService) {}

  startStream(video) {
    this.videoPlayer.open(video);
  }
}
