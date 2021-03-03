var tdate = new Date();
var date = tdate.getDate()+'/'+(tdate.getMonth()+1)+'/'+tdate.getFullYear();
document.getElementById("showdate").innerHTML = date;
var theday = tdate.getDate();

var theday2 = "27";
var duedate = "18";
var daysuntildue = theday - duedate;
var daysuntilduefinal = daysuntildue - daysuntildue - daysuntildue;
document.getElementById("showduecountdown").innerHTML = daysuntilduefinal;