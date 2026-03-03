import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  private albumsSubject = new BehaviorSubject<Album[] | null>(null);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadAlbums(): void {
    if (this.albumsSubject.value !== null) return;
    this.http.get<Album[]>(`${this.baseUrl}/albums`).subscribe({
      next: (data) => this.albumsSubject.next(data),
      error: () => this.albumsSubject.next([])
    });
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        const current = this.albumsSubject.value ?? [];
        this.albumsSubject.next(current.filter(a => a.id !== id));
      })
    );
  }

  createAlbum(payload: { userId: number; title: string }) {
  return this.http.post<Album>('https://jsonplaceholder.typicode.com/albums', payload);
}

addAlbumToLocalState(album: Album) {
  const current = this.albumsSubject.value ?? [];
  this.albumsSubject.next([album, ...current]);
}
}