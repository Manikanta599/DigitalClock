function cdata() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var dd = date.getDay();
    var day = date.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"];
    var am_pm = "AM";
    var yy = date.getFullYear();

    if (hh >= 12) {
        if (hh > 12) {
            hh = hh - 12;
        }
        am_pm = "PM";
    } else if (hh === 0) {
        hh = 12;
    }

    var sele = document.querySelectorAll("h1");
    console.log(sele);
    sele[0].innerHTML = `${hh}:${mm}:${am_pm}`;
    sele[1].innerHTML = `${day}/${months[date.getMonth()]}/${yy}`;
    sele[2].innerHTML=`${days[dd]}`;




}

cdata();

function fun()
{
    var date = new Date();
    var ss = date.getSeconds();
    document.querySelector("h2").innerHTML=ss;

    setTimeout(fun,1000)
    

}
fun()
