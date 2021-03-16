var tdate = new Date();
var date = tdate.getDate()+'/'+(tdate.getMonth()+1)+'/'+tdate.getFullYear();
document.getElementById("showdate").innerHTML = date;
var theday = tdate.getDate();