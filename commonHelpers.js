import"./assets/styles-9e1e9b33.js";import{f as p,i as S}from"./assets/vendor-77e16229.js";const a=document.querySelector("span[data-days]"),u=document.querySelector("span[data-hours]"),c=document.querySelector("span[data-minutes]"),d=document.querySelector("span[data-seconds]"),l=document.querySelector("#datetime-picker"),n=document.querySelector("button");n.addEventListener("click",C);n.disabled=!0;let r;p(l,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<Date.now()?(S.show({message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):n.disabled=!1}});let i=!1;function C(){i||(i=!0,l.disabled=!0,setInterval(()=>{const s=r-new Date,e=b(s);a.textContent=`${o(e.days)}`,u.textContent=`${o(e.hours)}`,c.textContent=`${o(e.minutes)}`,d.textContent=`${o(e.seconds)}`,n.disabled=!0,s<=0&&(a.textContent="00",u.textContent="00",c.textContent="00",d.textContent="00")},1e3))}function o(t){return String(t).padStart(2,"0")}function b(t){const m=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:h,minutes:f,seconds:y}}
//# sourceMappingURL=commonHelpers.js.map
