import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener
} from "@angular/core";

@Component({
  selector: 'app-header-mobil',
  templateUrl: './header-mobil.component.html',
  styleUrls: ['./header-mobil.component.scss']
})
export class HeaderMobilComponent implements OnInit {

  condition = true;
  isMenuOpen = false;
  @ViewChild("menuToggle") private menuToggle: ElementRef;
  @ViewChild("aa") private aa: ElementRef;
  @ViewChild("bb") private bb: ElementRef;
  @ViewChild("cc") private cc: ElementRef;
  @ViewChild("dd") private dd: ElementRef;
  @ViewChild("ee") private ee: ElementRef;
  @ViewChild("ff") private ff: ElementRef;
  // @ViewChild("gg") private gg: ElementRef;
  @ViewChild("menu") private menu: ElementRef;
  @ViewChild("nav") private nav: ElementRef;
  @ViewChild("splash") private splash: ElementRef;
  constructor(private renderer: Renderer2) {}
  splashClick(evento: any){
    evento.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
    this.menu.nativeElement.hidden = !this.isMenuOpen;
    this.nav.nativeElement.classList.toggle("nav--open");

  }
  menuToggleClick(evento: any) {
    evento.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
    this.aa.nativeElement.className += "bounceInRight";
    this.renderer.addClass(this.bb.nativeElement, "bounceInRight");
    this.renderer.addClass(this.cc.nativeElement, "bounceInRight");
    this.renderer.addClass(this.dd.nativeElement, "bounceInRight");
    this.renderer.addClass(this.ee.nativeElement, "bounceInRight");
    this.renderer.addClass(this.ff.nativeElement, "bounceInRight");
    // this.renderer.addClass(this.gg.nativeElement, "bounceInRight");

    this.renderer.setAttribute(
      this.menuToggle.nativeElement,
      "aria-expanded",
      String(this.isMenuOpen)
    );
    this.menu.nativeElement.hidden = !this.isMenuOpen;

    this.nav.nativeElement.classList.toggle("nav--open");

  }
  ngOnInit() {

  }

}
