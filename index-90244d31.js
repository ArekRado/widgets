(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d=()=>{const e=new URLSearchParams(window.location.search);return{currency:e.get("currency"),currencyBuySell:e.get("currencyBuySell"),ticker:e.get("ticker")}},s=e=>{document.body.innerHTML=e},{ticker:u,currency:a,currencyBuySell:f}=d();let o=null;u||(a?fetch(`//api.nbp.pl/api/exchangerates/rates/A/${a}?format=json`).then(e=>e.json()).then(e=>{var n;const i=(n=e==null?void 0:e.rates)==null?void 0:n[0];if(!i||!e)o={type:"api",data:"wrong api response"};else{const c=Math.floor((f==="sell"?1/i.mid:i.mid)*100)/100;s(`
        <div>
          <div>
            ${e.code}
          </div>
          <div>
            ${c}
          </div>
        </div>
        `)}}).catch(e=>{o={type:"api",data:e}}):o={type:"input",data:"currency or ticker parameter must be provided. "});o&&s(o.data);
