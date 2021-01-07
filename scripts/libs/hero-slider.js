class HeroSlider{
  constructor(el){
    this.el=el;
  this.swiper=this._initSwiper();
  }
  _initSwiper(){
   return  new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor:true,
      effect:'coverflow',
     centeredSlides:true,//中央ぞろえ
     slidesPerView:1,
     speed:1000,
     breakpoints:{
       1024:{
         slidesPerView:2,
       }
     },
    //  autoplay:{
    //    delay:4000,
    //    disableOnInteration:false
    //  }
    });
  }
  start(options={}){
    options=Object.assign({
      delay:4000,
      disableOnInteration:false
    },options);
    this.swiper.params.autoplay=options;
    this.swiper.autoplay.start();
  }
  stop(){
    this.swiper.autoplay.stop();
  }
}