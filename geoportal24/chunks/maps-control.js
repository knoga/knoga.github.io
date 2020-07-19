(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{65:function(t,n,e){"use strict";e.r(n),e.d(n,"MapsControl",(function(){return c}));e(59),e(63),e(58),e(61);var o=e(62),i=e(39),a=e(3);class c{constructor(t){this.options=t}onAdd(t){return this._map=t,this._container=document.createElement("div"),this._container.className="mapboxgl-ctrl",Object(a.c)(i.c`
                <vaadin-context-menu
                    selector="vaadin-button"
                    open-on="click"
                    .renderer=${n=>{if(!n.firstElementChild){const e=document.createElement("div");Object(a.c)(s({map:t,...this.options}),e),n.appendChild(e)}}}
                >
                    <vaadin-button theme="icon">
                        <iron-icon icon="maps:layers"></iron-icon>
                    </vaadin-button>
                </vaadin-context-menu>
            `,this._container),this._container}onRemove(){this._container.parentNode.removeChild(this._container),this._map=void 0}}const s=Object(o.b)(t=>{const{map:n,basemaps:e,basemap:a}=t,[c,s]=Object(o.a)(a);return i.c`
        ${e.map(t=>i.c`
                <vaadin-button
                    theme="${c===t.id?"primary":"secondary"}"
                    @click=${e=>{e.stopPropagation(),n.setStyle(t.style),s(t.id)}}
                    >${t.label}</vaadin-button
                >
            `)}
    `})}}]);