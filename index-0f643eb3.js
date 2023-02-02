(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const u=()=>{const e=new URLSearchParams(window.location.search);return{currency:e.get("currency"),currencyBuySell:e.get("currencyBuySell"),ticker:e.get("ticker")}},s=e=>{document.body.innerHTML=e},{ticker:d,currency:a,currencyBuySell:f}=u();let n=null;d||(a?fetch(`//api.nbp.pl/api/exchangerates/rates/A/${a}?format=json`).then(e=>e.json()).then(e=>{var c;const o=(c=e==null?void 0:e.rates)==null?void 0:c[0];if(!o||!e)n={type:"api",data:"wrong api response"};else{const i=Math.floor((f==="sell"?1/o.mid:o.mid)*100)/100;s(`
        <div>
          <h2>
            ${e.code}
          </h2>
          <h1>
            ${i}
          </h1>
        </div>
        `)}}).catch(e=>{n={type:"api",data:e}}):n={type:"input",data:"currency or ticker parameter must be provided. "});n&&s(n.data);
