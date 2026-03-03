import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[] | null>;
  loading = true;

  constructor(private albumService: AlbumService, private router: Router) {
    this.albums$ = this.albumService.albums$;
  }

  ngOnInit(): void {
    this.albumService.loadAlbums();
    this.albums$.subscribe(data => {
      if (data !== null) this.loading = false;
    });
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe();
  }
}