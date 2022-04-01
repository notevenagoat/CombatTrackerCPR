
  import { mooks } from "./stores.js";

  let wtf;
  mooks.subscribe(value => {
    wtf = value;
});

wtf.forEach((mook) => {
    const sortable = Object.fromEntries(
        Object.entries(mook.skills).sort(([,a],[,b]) => b-a)
        
    );
});

