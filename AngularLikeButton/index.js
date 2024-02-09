import { Component } from '@angular/core';

@Component({
    selector: 'like-button',
    template: `
        <button 
            (click)="buttonClick()"
            [ngClass]="['like-button', clicked ? 'liked' : '']"
        >
            Like | <span class="likes-counter">{{initialCount}}</span>
        </button>
    `,
    styles: [`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }

        .liked {
            font-weight: bold;
            color: #1565c0;
        }
    `]
})

export class LikeButtonComponent {
    public initialCount = 100;
    public clicked = false;
    buttonClick = () => {
        if (!this.clicked) {
            this.clicked = true;
            this.initialCount++;
        } else {
            this.clicked = false;
            this.initialCount--;
        }
    }
}
