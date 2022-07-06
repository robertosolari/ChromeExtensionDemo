async function fetchData() {
    const res = await fetch ("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json");
    const record = await res.json();
    
    document.getElementById("data").innerHTML               =   record[0].data;
    document.getElementById("stato").innerHTML              =   record[0].stato;
    document.getElementById("totale_positivi").innerHTML    =   record[0].totale_positivi;
    document.getElementById("deceduti").innerHTML           =   record[0].deceduti;
}
fetchData();