!function(){console.log("I am main"),console.log("I am button");console.log("After register"),(async()=>{if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("src/sw.js");e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active")}catch(e){console.error(`Registration failed with ${e}`)}})()}();
//# sourceMappingURL=index.dc7d82eb.js.map
