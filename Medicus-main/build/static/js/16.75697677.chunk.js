(this.webpackJsonpmedicus=this.webpackJsonpmedicus||[]).push([[16],{52:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(25);var a=r(21);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},70:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(52),a=r(11),s=r(12),c=r.n(s),i=r(14),u=r(8),o=r(15),l=r(0),h=r(20),j=r(13),p=r(56),b=r(19),f=r(76),d=r(1);function m(e){return Object(d.jsx)(p.c,{className:"border-0",children:Object(d.jsx)(j.e,{children:Object(d.jsx)(j.g,{className:"justify-content-center",children:Object(d.jsx)(j.a,{className:"col-auto align-items-center",children:Object(d.jsx)("h6",{className:"my-0 text-muted",children:e.message})})})})})}function O(e){var t=[];if(e.users&&e.users.length>0){var r,n=Object(o.a)(e.users.entries());try{for(n.s();!(r=n.n()).done;){var a=Object(u.a)(r.value,2),s=a[0],c=a[1],i=Object(d.jsx)(p.c,{className:"px-3",children:Object(d.jsx)(f.a,{session:e.session,username:c.username,listView:!0})},s);t.push(i)}}catch(l){n.e(l)}finally{n.f()}}else t.push(Object(d.jsx)(m,{message:e.defaultMessage}));return Object(d.jsx)(p.a,{className:"md-list",children:t})}function v(e){var t=Object(h.c)((function(e){return e.session})),r=Object(l.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(r){var n,a,s,i,u,o,l,h,j,p,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.view,a=void 0===n?"":n,s=r.search,i=void 0===s?"":s,u=r.page,o=void 0===u?0:u,l=r.limit,h=void 0===l?10:l,e.prev=1,(j=new URLSearchParams).append("view",a||""),j.append("search",i||""),j.append("page",o),j.append("limit",h),e.next=9,fetch("/api/users?".concat(j.toString()),{headers:{Authorization:"Bearer ".concat(t.authToken)}});case 9:return p=e.sent,e.next=12,p.json();case 12:if(b=e.sent,p.ok){e.next=15;break}throw new Error(b.message);case 15:return e.abrupt("return",b);case 18:throw e.prev=18,e.t0=e.catch(1),e.t0;case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),[t.authToken]),s=Object(l.useState)({users:[],limit:10}),o=Object(u.a)(s,2),p=o[0],f=o[1];function m(){return(m=Object(i.a)(c.a.mark((function t(){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r({view:e.view,search:e.search,page:Math.ceil(p.users.length/p.limit),limit:p.limit});case 3:s=t.sent,f((function(e){var t=[].concat(Object(n.a)(e.users),Object(n.a)(s));return Object(a.a)(Object(a.a)({},e),{},{users:t})})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to append more users. ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){function t(){return(t=Object(i.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r({view:e.view,search:e.search,page:0,limit:p.limit});case 3:n=t.sent,f((function(e){return Object(a.a)(Object(a.a)({},e),{},{users:n})})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to load users. ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.view,e.search,r,p.limit]),Object(d.jsx)(j.e,{children:Object(d.jsx)(j.g,{children:Object(d.jsxs)(j.a,{className:"px-0",children:[Object(d.jsx)(O,{session:t,users:p.users,defaultMessage:e.defaultMessage}),p.users.length>0&&Object(d.jsx)(b.a,{callback:function(){return m.apply(this,arguments)}})]})})})}},94:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r(12),a=r.n(n),s=r(14),c=r(8),i=r(0),u=r(13),o=r(55),l=r(70),h=r(1);function j(e){var t=Object(i.useState)(""),r=Object(c.a)(t,2),n=r[0],j=r[1];function p(){return(p=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.d,{title:"Search Patients",children:Object(h.jsx)(o.c,{handleSearch:function(e){return p.apply(this,arguments)},placeholder:"Search patients..."})}),Object(h.jsx)(u.g,{className:"flex-grow-1",children:Object(h.jsx)(u.a,{children:Object(h.jsx)(l.a,{view:"patient",search:n,defaultMessage:"Search for Patients using the search bar."})})})]})}}}]);
//# sourceMappingURL=16.75697677.chunk.js.map