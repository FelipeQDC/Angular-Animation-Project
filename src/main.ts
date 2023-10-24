import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  document.addEventListener("scroll",throttleEvent, false)
let EstaEscrolando = false;
function throttleEvent(event: any) {
  if (EstaEscrolando === false) {
    requestAnimationFrame(() => {
      handleScrolledPosition(event);
      EstaEscrolando = false;
    });
  }
  EstaEscrolando = true;
}

function handleScrolledPosition(event: any) {
  let scroll = window.scrollY;

  if (scroll >= 300 && scroll < 600) {
    document.body.style.setProperty("--gradientStop", "rgb(4, 136, 229)");
    document.body.style.setProperty("--Meio", "rgb(4, 136, 229)");
  } else if (scroll >= 600 && scroll < 1200) {
    document.body.style.setProperty("--Meio", "#0473c3");
    document.body.style.setProperty("--gradientStop", "#0473c3");
  } else if (scroll >= 1300) {
  } else if (scroll >= 1200 && scroll < 1300) {
    document.body.style.setProperty("--gradientStop", "#0362a7");
  } else if (scroll >= 1300) {
    document.body.style.setProperty("--gradientStop", "#03528b");
  }
}