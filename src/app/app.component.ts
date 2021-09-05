import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy,
  ElementRef,
  Renderer2
} from '@angular/core';
import Swal from 'sweetalert2';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { FormularioService } from './formulario.service';
import { ServerrequestService } from './services/serverrequest.service';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2, public formulariosReactivos: FormularioService, private serverconnection: ServerrequestService) {

  }
  // dates
  datechosen: any;
  // times
  //
  public url: string;
  public languageLabel: string;
  public urltest: string;
  timepickerchosen: any;
  //animacion de loading server request
  public loading = false;
  // animation loading
  @ViewChild("ngxLoading") ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild("customLoadingTemplate") customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = "rgb(42, 206, 42)";
  public secondaryColour = "rgb(247, 64, 8)";
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public fullscreenloadingdecision = true;
  public radio = "20px";
  public colorback = "#000000d2";
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: this.radio,
    fullScreenBackdrop: this.fullscreenloadingdecision,
    backdropBackgroundColour: this.colorback
  };

  // Menu Mobil
  condition = true;
  isMenuOpen = false;
  hinge: boolean = false;
  bounceInDown: boolean = false;
  dateToday = new Date();
  @ViewChild("tuproyecto") private tuproyecto: ElementRef;
  @ViewChild("popupBlock") private popupBlock: ElementRef;

  // Particles js conf
  myStyle: object = {};
  myStyle2: object = {};
  myParams: object = {};
  myParams2: object = {};
  width: number = 100;
  height: number = 100;
  ancho: number = 40;
  alto: number = 40;
  quierecita: boolean = false;
  title = 'CristianSite';
  // evento de cerrar el boton meter animated out animation
  pongaOutAnimation() {
    this.hinge = true;
  }
  quiteOutAnimation() {
    this.popupBlock.nativeElement.classList.remove("zoomOutUp");

  }
  ngOnInit() {

    const urll = "https://www.opttimusdev.com/";
    const urlles = "https://opttimusdevp.com/";
    const geturl = window.location.href;
    console.log(geturl);
    if (geturl === urlles) {
      this.url = urll;
      this.languageLabel = "English";
    } else if (geturl === urll) {
      this.url = urlles;
      this.languageLabel = "Español";
    } else {
      this.url = "#disparemodal";
      this.languageLabel = "Test";
    }
    setTimeout(() => {
      this.tuproyecto.nativeElement.style.opacity = "1";
    }, 4000);
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
    };
    this.myStyle2 = {
      'position': 'relative',
      'width': '35%',
      'height': '28%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
    };
    this.myParams2 = {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 600
          }
        },
        color: {
          value: '#005aff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0
          }
        },
        polygon: {
          nb_sides: 5
        },

        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 3,
            opacity_min: 1,
            sync: true
          }
        },
        move: {
          enable: true,
          speed: 1,

          random: true,
          straight: false,

          attract: {
            enable: true,
            rotateX: 6000,
            rotateY: 1200
          }
        }

      }
    };
    this.myParams = {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#005aff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0
          }
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 3,
            opacity_min: 0.1,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 6,

          random: false,
          straight: false,

          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }

      }
    };


  }
  go() {
    this.loading = true;
    console.log('this.formulariosReactivos.formReg.value');
    console.log(this.formulariosReactivos.formReg.value);
    console.log('datechosen');
    // haciendo los preparativos para enviar objeto
    const objetoEnviar = this.formulariosReactivos.formReg.value;
    if (this.datechosen) objetoEnviar["datechosen"] = this.datechosen;
    if (this.timepickerchosen) objetoEnviar["timepickerchosen"] = this.timepickerchosen;
    console.log(this.datechosen);
    console.log(objetoEnviar);
    this.serverconnection.SendData(objetoEnviar)
      .subscribe((data: any) => {
        console.log("server answer");
        console.log(data);
        this.loading = false;
        if (data) {
          if (data.successSaved) {

            Swal.fire({
              title:
                "congratulations " +
                this.formulariosReactivos.Namegetter.value +
                " se ha enviado con exito tú formulario",
              animation: false,
              html: `<b> Pronto nos comunicaremos con tigo See you soon!  </b> </p> `,
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ok!"
            }).then(result => {
              if (result.value) {

              }
            });
            // fin swal
          }

          if (!data.successSaved) {
            alert("sin exito");
          }
        }
        if (!data) {
          this.loading = true;
          alert('server error');
          Swal.fire({
            title: "server error:( " + " sorry " + this.formulariosReactivos.Namegetter.value,
            icon: "error"
          });
          this.loading = false;
        }
      });
  }

}
