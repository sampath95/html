var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";}
    }
    
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;  
}

function distancetoparis(latitude, longitude, lat2="48.8566", lon2="2.3522", unit) {
    var distanceparis    
    var radlatitude = Math.PI * latitude/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * longitude/180
        var radlon2 = Math.PI * lon2/180
        var theta = longitude-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlatitude) * Math.sin(radlat2) + Math.cos(radlatitude) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        dist = distanceparis
        return distanceparis

}



function distancetolyon(latitude, longitude, lat2="45.7640", lon2="4.8357", unit) {
    var distancelyon   
    var radlatitude = Math.PI * latitude/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * longitude/180
        var radlon2 = Math.PI * lon2/180
        var theta = longitude-lon2
        var radtheta = Math.PI * theta/180
        var dist1 = Math.sin(radlatitude) * Math.sin(radlat2) + Math.cos(radlatitude) * Math.cos(radlat2) * Math.cos(radtheta);
        dist1 = Math.acos(dist)
        dist1 = dist * 180/Math.PI
        dist1 = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        dist= distancelyon
        return distancelyon

}

function distancetomarseille(latitude, longitude, lat2="43.2965 ", lon2="5.3698", unit) {
    var distancemarseille    
    var radlatitude = Math.PI * latitude/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * longitude/180
        var radlon2 = Math.PI * lon2/180
        var theta = longitude-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlatitude) * Math.sin(radlat2) + Math.cos(radlatitude) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        dist=distancemarseille
        return distancemarseille
}

function yourcity{
if(distanceparis<< distancemarseille && distancelyon)
{
    yourcity = 1;
}

if(distancemarseille<< distanceparis && distancelyon)
{
    yourcity = 2;
}
if(distancelyon<< distancemarseille && distanceparis)
{
    yourcity = 3;
}

}

if(yourcity==1)
{
    


}