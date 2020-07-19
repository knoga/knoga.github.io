(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{67:function(e,t,o){"use strict";o.r(t),o.d(t,"AppView",(function(){return u}));var i=o(39);const r=e=>Array.isArray(e)?(e=>Array.isArray(e)?(e=>{let t=[];for(let o=0;o<e.length;o++){let i=e[o].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")})(e):e)(e).split("."):e.toString().split("."),n=(e,t,o)=>{let i=e,n=r(t);for(let e=0;e<n.length;e++){if(!i)return;i=i[n[e]]}return o&&(o.path=n.join(".")),i};class a extends i.a{constructor(){super(),this.observersMap=new Map(null),this.destroyed=!1,this.initializeObservers()}connectedCallback(){this.destroyed=!1,super.connectedCallback()}disconnectedCallback(){this.destroyed=!0,super.disconnectedCallback()}$$(e){return this.shadowRoot.querySelector(e)}updated(e){super.updated(e),this.executePropertiesChangedObserverDecorators(e),this.executePropertiesChangedEvents(e),this.executeObservers(e)}initializeObservers(){const e=this.constructor.observers||[];for(const t of e){const e=t.split("("),o=e[0].trim(),i=e[1].trim().replace(/\)$/g,"").split(",").map(e=>e.trim());this.observersMap.set(o,i)}return this.observersMap}executePropertiesChangedObserverDecorators(e){this.observerDecorators&&e.forEach((e,t)=>{const o=this.observerDecorators.get(t);if(o&&this[o])try{const i=this[t];this[o](i,e)}catch(e){console.error("execute observer error",{observerName:o,key:t,e:e})}})}executePropertiesChangedEvents(e){e.forEach((e,t)=>{let o=(String(t)+"Changed").split(/(?=[A-Z])/).join("-").toLowerCase();const i=this[t];try{this.dispatchEvent(new CustomEvent(o,{detail:{value:i,oldValue:e}}))}catch(e){console.error("dispatchEvent error",{eventName:o,key:t,e:e})}})}executeObservers(e){if(void 0!==this.observersMap&&this.observersMap.size>0)for(const[o,i]of this.observersMap){let r=!1;const a=[];for(const o of i)a.push(n(this,o)),(e.has(o)||e.has(-1===(t=o).indexOf(".")?t:t.slice(0,t.indexOf("."))))&&(r=!0);if(r)if(this[o])try{this[o](...a)}catch(e){console.error("execute observer error",{fn:o,e:e,newArgs:a})}else console.warn(`observer method '${o}(${i})' not defined`)}var t}}class s{static isMobileSize(){return this.viewportWidth()<=768||this.viewportHeight()<=768}static isMobile(){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))}static viewportHeight(){return window.innerHeight}static viewportWidth(){return window.innerWidth}}var c=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{c(i.next(e))}catch(e){n(e)}}function s(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};const{mapboxgl:p}=window;class l{constructor(e={container:"map",accessToken:"not-needed",zoom:4,center:[19,52],hash:!0}){this.basemap="streets",this.basemaps=[{id:"basic",label:"Basic",style:"https://api.maptiler.com/maps/basic/style.json?key=fxrAn6nevCCpCCxhndyU"},{id:"streets",label:"Streets",style:"https://api.maptiler.com/maps/streets/style.json?key=fxrAn6nevCCpCCxhndyU"},{id:"topographique",label:"Topo",style:"https://api.maptiler.com/maps/topographique/style.json?key=fxrAn6nevCCpCCxhndyU"},{id:"hybrid",label:"Hybrid",style:"https://api.maptiler.com/maps/hybrid/style.json?key=fxrAn6nevCCpCCxhndyU"}],this.controls=[],this.options=Object.assign({style:this.basemaps.find(e=>e.id===this.basemap).style},e)}build(){const e=Math.ceil(96*devicePixelRatio),t=Math.ceil(256*devicePixelRatio),o=new p.Map(this.options);return window.map=o,this.controls.forEach(e=>c(this,void 0,void 0,(function*(){if("function"==typeof e.control){const t=yield e.control();o.addControl(t,e.position)}else o.addControl(e.control,e.position)}))),o.on("load",()=>{o.addSource("ortofoto",{type:"raster",tiles:[`https://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer?CRS=EPSG:3857&WIDTH=${t}&HEIGHT=${t}&dpi=${e}&BBOX={bbox-epsg-3857}&VERSION=1.3.0&SERVICE=WMS&REQUEST=GetMap&LAYERS=Raster&styles=&FORMAT=image/jpeg&TRANSPARENT=TRUE`],tileSize:256}),o.addSource("KrajowaIntegracjaEwidencjiGruntow",{type:"raster",tiles:[`https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow?CRS=EPSG:3857&WIDTH=${t}&HEIGHT=${t}&dpi=${e}&BBOX={bbox-epsg-3857}&VERSION=1.3.0&SERVICE=WMS&REQUEST=GetMap&LAYERS=obreby,dzialki,numery_dzialek,budynki&FORMAT=image/png&TRANSPARENT=TRUE`],tileSize:256}),o.addSource("KrajowaIntegracjaUzbrojeniaTerenu",{type:"raster",tiles:[`https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu?CRS=EPSG:3857&WIDTH=${t}&HEIGHT=${t}&dpi=${e}&BBOX={bbox-epsg-3857}&VERSION=1.3.0&SERVICE=WMS&REQUEST=GetMap&LAYERS=przewod_pozostale,przewod_urzadzenia,przewod_slupy,przewod_inny,przewod_naftowy,przewod_benzynowy,przewod_elektroenergetyczny,przewod_telekomunikacyjny,przewod_gazowy,przewod_cieplowniczy,przewod_kanalizacyjny,przewod_wodociagowy&FORMAT=image/png&TRANSPARENT=TRUE`],tileSize:256}),o.addSource("KrajowaIntegracjaMiejscowychPlanowZagospodarowaniaPrzestrzennego",{type:"raster",tiles:[`https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaMiejscowychPlanowZagospodarowaniaPrzestrzennego?CRS=EPSG:3857&WIDTH=${t}&HEIGHT=${t}&dpi=${e}&BBOX={bbox-epsg-3857}&VERSION=1.3.0&SERVICE=WMS&REQUEST=GetMap&LAYERS=plany,studium,raster,wektor-str,wektor-lzb,wektor-pow,wektor-lin,wektor-pkt,granice&FORMAT=image/png&TRANSPARENT=TRUE`],tileSize:256}),o.addLayer({id:"ortofoto-layer",type:"raster",source:"ortofoto",minzoom:10,layout:{visibility:"none"},paint:{}}),o.addLayer({id:"KrajowaIntegracjaEwidencjiGruntow-layer",type:"raster",source:"KrajowaIntegracjaEwidencjiGruntow",minzoom:15,layout:{visibility:"visible"},paint:{}}),o.addLayer({id:"KrajowaIntegracjaUzbrojeniaTerenu-layer",type:"raster",source:"KrajowaIntegracjaUzbrojeniaTerenu",minzoom:19,layout:{visibility:"visible"},paint:{}}),o.addLayer({id:"KrajowaIntegracjaMiejscowychPlanowZagospodarowaniaPrzestrzennego-layer",type:"raster",source:"KrajowaIntegracjaMiejscowychPlanowZagospodarowaniaPrzestrzennego",minzoom:19,layout:{visibility:"none"},paint:{}})}),o}withDefaultControls(){return this.controls.push({control:()=>c(this,void 0,void 0,(function*(){const{TestControl:e}=yield Promise.all([o.e(0),o.e(4)]).then(o.bind(null,65));return new e})),position:"top-left"}),this.controls.push({control:()=>c(this,void 0,void 0,(function*(){const{MapsControl:e}=yield Promise.all([o.e(0),o.e(6),o.e(3)]).then(o.bind(null,66));return new e({basemaps:this.basemaps,basemap:this.basemap})})),position:"top-right"}),this.controls.push({control:new p.NavigationControl({showCompass:!0,showZoom:!s.isMobile()}),position:"bottom-right"}),this.controls.push({control:new p.GeolocateControl({positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{maxZoom:17},trackUserLocation:!0,showAccuracyCircle:!1}),position:"bottom-right"}),this.controls.push({control:new p.ScaleControl({unit:"metric"}),position:"bottom-left"}),this}}var d=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a},h=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{c(i.next(e))}catch(e){n(e)}}function s(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let u=class extends a{constructor(){super(...arguments),this.styles=i.c`
        <style>
            :host {
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            #map {
                width: 100%;
                height: 100%;
            }
        </style>
    `}createRenderRoot(){return this}initMap(){return h(this,void 0,void 0,(function*(){const e=this.renderRoot.querySelector("#map");new l({container:e,accessToken:"not-needed",zoom:4,center:[19,52],hash:!0}).withDefaultControls().build()}))}firstUpdated(e){super.firstUpdated(e),setTimeout(()=>{this.initMap()})}render(){return i.c`
            ${this.styles}
            <!-- -->
            <div id="map"></div>
        `}};u=d([Object(i.b)("app-view")],u)}}]);