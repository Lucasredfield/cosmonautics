import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.subscription = this.loaderService.isLoading.subscribe(loading => {
      setTimeout(() => {
        this.loading = loading;
      }, 0);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
