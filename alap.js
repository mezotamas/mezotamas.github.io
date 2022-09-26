fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(tomb){
    console.log(tomb)
}

sz=''
    for (let elem of tomb) {
        sz+='<option>'+elem.name+'</option>'
    }
    document.getElementById("lenyilo").innerHTML=sz

    //táblázat
    sz2=''
    for (let elem of tomb) {
        sz2+='<tr>'
        sz2+='<td>'
        sz2+=elem.title
        sz2+='</td>'
        sz2+='<td>'
        sz2+=elem.year
        sz2+='</td>'
        sz2+='<td>'
        sz2+=elem.released
        sz2+='</td>'
        sz2+='<td>'
        sz2+=elem.genre
        sz2+='</td>'
        sz2+='<td>'
        sz2+=elem.actors
        sz2+='</td>'
	sz2+='<td>'
	sz2+=elem.awards
	st2+='</td>'
        sz2+='</tr>'
    }
    document.getElementById("torzs").innerHTML=sz2

let sz3=''
    for (let elem of tomb) {
        sz3+='<div class="col-sm-6 col-md-4" style="text-align:center">'
        adat=elem.images.split(':')
        keplink='https:'+adat[1]
        sz3+='<img src="'+keplink+'" alt="" style="width:250px;margin:20px">'
        sz3+='</div>'
    }
    document.getElementById("doboz").innerHTML=sz3

}

