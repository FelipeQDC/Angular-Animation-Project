import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';


export const fadeState =

trigger('fadeState', [
      state('Esconder', style({
       opacity: '0',
       height: '0px',
       display:'none'
      })),
      state('Mostrar', style({
        opacity: '1',
        height: '470px',
        display:'block'
      })),
      transition('Mostrar => Esconder', animate('800ms ease-out')),
      transition('Esconder => Mostrar', animate('1400ms ease-in-out'))
]);

export const myInsertRemoveTrigger =

trigger('myInsertRemoveTrigger', [
  transition(':enter', [
    style({ opacity: '0', display:'none' ,transform: "translateX(-100%)",height: '0px' }),
    animate('1230ms ease-in-out', 
            style({ 
            transform: 'translateX(0)',
            opacity: '1',
            display:'block'  }))
  ]),
  transition(':leave', [
    style({ opacity: 1, display:'block',transform: "translateX(0)",height: '0px' }),
    animate('550ms ease-in-out', 
            style({  display:'none',
            transform: 'translateX(900px)',
            opacity: '0',
             }))
  ])
]);
    
export const Cor =
  
  trigger('Cor', [
      state('Esconder', style({
        color: '#1d2e38'
        

      })),
      state('Mostrar', style({
        color: '#ff2626'
      })),
      transition('Mostrar => Esconder', animate('600ms ease-out')),
      transition('Esconder => Mostrar', animate('600ms ease-in-out'))
    ]);

export const Sidebar =

  trigger('Sidebar', [
    state('Esconder', style({
      opacity: '1',
      display: 'block',
      transform: 'translatex(0px)'
    })),
    state('Mostrar', style({
      opacity: '0',
      display: 'none',
      transform: 'translatex(-30px)'
    })),
    transition('Mostrar => Esconder', animate('600ms ease-out')),
    transition('Esconder => Mostrar', animate('600ms ease-in-out'))
  ]);


