import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

//Exemplo uso <div class="row mb-3" [@fadeAnimation]>

// @Component({
//   animations: [ListAnimations.fadeAnimation(), ListAnimations.listAnimation()],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })

export class ListAnimations {
  public static listAnimation() {
    return trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ transform: 'scale(0)' }),
            stagger('50ms', animate('500ms ease-out', style({ transform: 'scale(1)' }))),
          ],
          {
            optional: true,
          },
        ),
        query(':leave', animate('200ms', style({ transform: 'scale(0)' })), { optional: true }),
      ]),
    ]);
  }

  public static listFadeAnimation() {
    return trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [style({ opacity: 0 }), stagger('50ms', animate('500ms ease-out', style({ opacity: 1 })))], {
          optional: true,
        }),
        query(':leave', animate('200ms', style({ opacity: 0 })), { optional: true }),
      ]),
    ]);
  }

  public static simpleFadeAnimation() {
    return trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]);
  }

  public static fadeAnimation() {
    return trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('400ms', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('400ms', style({ opacity: 0 }))]),
    ]);
  }

  public static enterLeave() {
    return trigger('EnterLeave', [
      state('flyIn', style({ transform: 'scale(1)' })),
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('600ms ease-out', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', animate('200ms', style({ transform: 'scale(0)' }))),
    ]);
  }

  public static listInOut() {
    return trigger('listInOut', [
      transition(':enter', [
        query('div', [
          style({ opacity: 0, transform: 'translateY(50%)' }),
          stagger(100, [animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' }))]),
        ]),
      ]),
      transition(':leave', [
        query('div', [
          style({ opacity: 1, transform: 'translateY(0)' }),
          stagger(100, [animate('.5s ease', style({ opacity: 0, transform: 'translateY(-50%)' }))]),
        ]),
      ]),
    ]);
  }

  public static ifInOut() {
    return trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ transform: 'translate3d(0, -15%, 0)', opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ transform: 'translate3d(0, 0, 0)', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height:  '100%', opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  }
}