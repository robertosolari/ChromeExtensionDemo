async function fetchData() {
    const res=await fetch ("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale-latest.csv");
    const record=await res.json();
    document.getElementById("data").innerHTML=record.data[0].date;
    document.getElementById("stato").innerHTML=record.data[0].areaName;
    document.getElementById("totale_positivi").innerHTML=record.data[0].latestBy;
    document.getElementById("deceduti").innerHTML=record.data[0].deathNew;
}
fetchData();