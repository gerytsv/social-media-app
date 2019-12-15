import { NotificatorService } from './../../../core/services/notificator.service';
import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from '../../../core/services/dialog.service';
import { PostDTO } from '../../../post/models/post.dto';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css'],
})
export class PostPreviewComponent implements OnInit {
  private loggedInSubscription: Subscription;
  public loggedIn = false;

  @Input() public post: PostDTO;
  constructor(
    private readonly dialogService: DialogService,
    private readonly authService: AuthService,
    private readonly notification: NotificatorService
  ) {}

  public onPostClick() {
    if (!this.loggedIn) {
      // tslint:disable-next-line: quotemark
      this.notification.warn("You can't access that! Please log in first!");
    } else {
      this.dialogService.openPostPreview({
        data: { user: this.post.user, post: this.post },
      });
    }
  }
  ngOnInit() {
    this.loggedInSubscription = this.authService.isLoggedIn$.subscribe(res => {
      this.loggedIn = res;
    });
  }
}
