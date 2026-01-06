import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
// import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifsService = inject(GifsService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    console.log({ scrollTop, clientHeight, scrollHeight })
  }
}
