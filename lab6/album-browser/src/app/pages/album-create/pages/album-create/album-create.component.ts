import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../../../services/album.service';
import { Album } from '../../../../models/album.model';


@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css'],
})
export class AlbumCreateComponent {
  title = '';
  userId = 1;

  loading = false;
  error: string | null = null;

  constructor(private albumService: AlbumService, private router: Router) {}

  create(): void {
    this.error = null;

    const trimmed = this.title.trim();
    if (!trimmed) {
      this.error = 'Title is required';
      return;
    }

    this.loading = true;

    this.albumService.createAlbum({ userId: this.userId, title: trimmed }).subscribe({
      next: (created: Album) => {
        // optimistic update (если у тебя сервис хранит локальный список)
        this.albumService.addAlbumToLocalState(created);
        this.router.navigate(['/albums']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to create album.';
      },
    });
  }
}