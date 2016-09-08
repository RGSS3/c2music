;(function(G){
  G.query = function(a){
     if(a instanceof HTMLElement) return a;
     var s = [].slice.call(document.querySelectorAll(a));
     if(s.length === 0){
        return document.querySelector("#" + a);
     } else {
        return s[0];
     }  
  };
  G.def = function(a, b){
     b = b || a;
     G[a] = function(obj, n){
        if(arguments.length === 1){
            return query(obj)[b];
        }else{
            return query(obj)[b] = n;
       }
     } 
  };
  ["click"].forEach(function(f){ def(f, "on"+f); });
  ["value", "src"].forEach(function(f){ def(f); });
  
  G.asKeyword = function(a){
    return encodeURIComponent(value(a));
  } 
})(this);