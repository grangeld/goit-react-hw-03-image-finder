(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{24:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(17),r=n.n(o),i=(n(24),n(8)),s=n(4),u=n(18),l=n.n(u),j=n(1),b=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1];return Object(j.jsx)("header",{className:"Searchbar",onSubmit:function(e){e.preventDefault(),t(o)},children:Object(j.jsxs)("form",{className:"SearchForm",children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){r(e.currentTarget.value)}})]})})},m=n(19),d=n.n(m),h=function(e,t){return d.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19837689-b4668a99c8160a282132f247e&image_type=photo&orientation=horizontal&per_page=12")).catch((function(e){console.log(e)}))},f=function(e){var t=e.imgData,n=e.onShowModal;return Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return n(t.largeImageURL,t.tags)},children:Object(j.jsx)("img",{src:t.webformatURL,alt:t.tags,className:"ImageGalleryItem-image"})})},O=function(e){var t=e.children,n=e.onShowModal;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){return Object(j.jsx)(f,{imgData:e,onShowModal:n},t)}))})},g=function(e){var t=e.onLoadMoreImg;return Object(j.jsx)("button",{className:"Button",onClick:function(){t()},children:"Load more"})},p=function(e){var t=e.picture,n=e.description,a=void 0===n?"img":n,o=e.onCloseModal;return Object(c.useEffect)((function(){function e(e){"Escape"===e.key&&o()}return window.addEventListener("keyup",e),function(){return window.removeEventListener("keyup",e)}})),Object(j.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&o()},children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:t,alt:a})})})};var x=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(1),r=Object(s.a)(o,2),u=r[0],m=r[1],d=Object(c.useState)(""),f=Object(s.a)(d,2),x=f[0],v=f[1],S=Object(c.useState)(!1),w=Object(s.a)(S,2),y=w[0],N=w[1],M=Object(c.useState)(!1),k=Object(s.a)(M,2),I=k[0],F=k[1],C=Object(c.useState)(""),E=Object(s.a)(C,2),L=E[0],B=E[1],D=Object(c.useState)(""),G=Object(s.a)(D,2),T=G[0],A=G[1],J=function(e,t){y?N(!1):(A((function(e){return t})),B((function(t){return e})),N(!0))},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;F(!0),h(e,u).then((function(e){a((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.data.hits))}))})).then((function(){return F(!1)})).then((function(){1!==u&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))};return Object(c.useEffect)((function(){1!==u&&R()}),[u]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{onSubmit:function(e){m(1),a([]),v(e.trim(),R(e.trim()))}}),Object(j.jsx)(O,{onShowModal:J,children:n}),n.length>0&&!I&&Object(j.jsx)(g,{onLoadMoreImg:function(){m((function(e){return e+1}))}}),y&&Object(j.jsx)(p,{picture:L,description:T,onCloseModal:J}),I&&Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)(l.a,{type:"Puff",color:"#00BFFF",height:100,width:100})})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.d09b631d.chunk.js.map