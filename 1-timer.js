import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as y}from"./assets/vendor-BbbuE1sJ.js";const u=document.getElementById("datetime-picker"),r=document.querySelector("button[data-start]"),S=document.querySelector("span[data-days]"),g=document.querySelector("span[data-hours]"),D=document.querySelector("span[data-minutes]"),w=document.querySelector("span[data-seconds]");let d=null,l=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):(d=e,r.disabled=!1)}};p(u,b);r.addEventListener("click",()=>{d&&(r.disabled=!0,u.disabled=!0,l=setInterval(C,1e3))});function C(){const e=d-new Date;if(e<=0){clearInterval(l),u.disabled=!1,r.disabled=!0;return}const{days:n,hours:o,minutes:a,seconds:s}=q(e);M(n,o,a,s)}function M(t,e,n,o){S.textContent=c(t),g.textContent=c(e),D.textContent=c(n),w.textContent=c(o)}function c(t){return String(t).padStart(2,"0")}function q(t){const s=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:f,seconds:h}}const i=document.querySelector(".date span");i.textContent=new Date().toLocaleString();setInterval(()=>i.textContent=new Date().toLocaleString(),1e3);function v(t){const e=new Date,n=new Date(t);let o=e.getFullYear()-n.getFullYear();const a=e.getMonth()-n.getMonth(),s=e.getDate()-n.getDate();return(a<0||a===0&&s<0)&&(o-=1),o}console.log(v("1995-11-18"));
//# sourceMappingURL=1-timer.js.map
