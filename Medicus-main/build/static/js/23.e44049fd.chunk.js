(this.webpackJsonpmedicus=this.webpackJsonpmedicus||[]).push([[23],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var c=n(12),a=n.n(c),r=n(11),i=n(52),s=n(14),o=n(8),d=n(0),u=n(19),j=n(51),l=n(31),m=n(13),b=n(1);function h(e){return Object(b.jsx)(j.l,{children:Object(b.jsx)(m.e,{children:Object(b.jsx)(m.g,{children:Object(b.jsx)(m.a,{className:"md-font-sm text-center text-muted",children:"No medication available"})})})})}function p(e){return Object(b.jsx)(j.l,{children:Object(b.jsxs)(m.e,{children:[Object(b.jsx)(m.g,{children:Object(b.jsx)(m.a,{className:"text-truncate font-weight-bold",children:Object(b.jsx)(l.b,{to:"/appointments/".concat(e.medication.appointmentId),children:e.medication.name})})}),Object(b.jsx)(m.g,{children:Object(b.jsx)(m.a,{className:"md-font-sm text-muted text-truncate",children:"".concat(e.medication.dosage," mg")})})]})})}function f(e){return Object(b.jsx)(j.k,{children:0!==e.medications.length?Object(b.jsx)(b.Fragment,{children:e.medications.map((function(t,n){return Object(b.jsx)(p,{medication:t,handleDelete:e.deleteMedication},n)}))}):Object(b.jsx)(h,{})})}function x(e){var t=Object(d.useState)({medications:[],limit:10}),n=Object(o.a)(t,2),c=n[0],l=n[1];function m(){return(m=Object(s.a)(a.a.mark((function t(){var n,s,o,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="/api/users/".concat(e.user.username,"/medications"),(s=new URLSearchParams).append("page",Math.ceil(c.medications.length/c.limit)),s.append("limit",c.limit),t.next=7,fetch("".concat(n,"?").concat(s.toString()),{headers:{Authorization:"Bearer ".concat(e.session.authToken)}});case 7:return o=t.sent,t.next=10,o.json();case 10:if(d=t.sent,o.ok){t.next=13;break}throw new Error(d.message);case 13:l((function(e){var t=[].concat(Object(i.a)(e.medications),Object(i.a)(d));return Object(r.a)(Object(r.a)({},e),{},{medications:t})})),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.error("Failed to append more medications. ".concat(t.t0));case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(j.e,{children:[Object(b.jsx)(j.a,{title:"Medications"}),Object(b.jsx)(f,{medications:c.medications})]}),Object(b.jsx)(u.a,{callback:function(){return m.apply(this,arguments)}})]})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(25);var a=n(21);function r(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=23.e44049fd.chunk.js.map