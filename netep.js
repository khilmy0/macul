const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
var ts = new Date();
ts = ts.getTime();
var titen = [];
console.tilik = console.log.bind(console);
const netep = async (isFirst = true) => {
    var re = 0;
    await sleep(3000);
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    await sleep(10000);
    if(isFirst){
	    document.getElementsByTagName("colab-run-button")[1].click();
	    await sleep(5000);
	    try {
		document.querySelector("#ok").click();
		console.log("bayangan wis di pencet")
	    }
		catch(err) {
		console.log("ora nana bayangan")
	    }
    }
    console.log('--------------- Molaih macul -----------------------')
    for (let index = 1; index < 901; index++) {
	    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
	    console.log('di baleni ping ' + re);
	    const mentahan = [45535, 47567, 58936, 46932, 43936, 52032, 55623, 37045, 33345];
	    const ngasal = Math.floor(Math.random() * mentahan.length);
	    await sleep(mentahan[ngasal]);
            console.log = function() {
                titen.push(Array.from(arguments));
                console.tilik.apply(console, arguments);
            }
            var dijaluk = false;
            var dibalekna = false;
            for (let niliki = 0; niliki < titen.length; niliki++) {
                if (titen[niliki][0] == 'Runtime disconnected'){dijaluk = true}
                if (titen[niliki][0].match('Connected to')){dibalekna = true}
            }
            if(dijaluk && !dibalekna){
		document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    		console.log('%cpacule di jaluk', 'color: #db0000');
		await sleep(mentahan[ngasal]);
		document.getElementsByTagName("colab-run-button")[2].click();
    		document.getElementsByTagName("colab-run-button")[1].click();
    		re = re + 1;
            }
            titen = [];
	    console.clear();
	    try {
		document.querySelector("#ok").click();
		console.log("%cbayangan wis di pencet", 'color: #19bd5d')
	    }
	    catch(err) {
	    }
	    if(index % 33 == 0){
	    	re = re + 1;
	    	document.getElementsByTagName("colab-run-button")[2].click();
	    	await sleep(180000);
	    	document.getElementsByTagName("colab-run-button")[3].click();
	    	console.log('%cmolaih mbaleni', 'color: #ccb51f');
	    }
	    if(index % 7 == 0){
	    	document.getElementsByTagName("colab-run-button")[4].click();
	    	console.log('%cNgaso disit', 'color: #ccb51f');
	    }
	    var siki = new Date();
	    siki = siki.getTime();
	    n = siki - ts;
	    h = Math.floor(n / (1000*60*60));
	    m = Math.floor((n - h * (1000*60*60)) / (1000*60));
	    console.log('%cuis mlaku '+ h + ' jm, '+ m + ' mt', 'color: #19bd5d');
    }
    console.log('--------------- Macule Rampung Setengari! ---------------------');
    console.log('--------------- Lg siap siap macul maning ---------------------');
    await sleep(350000);
    netep();
}
netep(false);
