var commArr;
var country_name=document.getElementById('country_name');
function fetchAllData(){
var request=new XMLHttpRequest();
request.open('GET','https://api.covid19api.com/summary')
request.send();
request.onload=function(){
    commArr=JSON.parse(request.responseText);
    // console.log(commArr)
fetchCountries(commArr.Countries);
}
}
function fetchCountries(countryData)
{
    for(var i=0;i<countryData.length;i++)
    {
        var option = document.createElement('option');
        option.innerHTML= countryData[i].Country;
        option.value=countryData[i].Country;
        if(countryData[i].Country==='India'){
            option.selected=true;
             displayResults(countryData[i]);
        }
        country_name.appendChild(option);
    }
}
function displayResults(obj){
    console.log(obj)
    document.getElementById('confirm').innerHTML= obj.TotalConfirmed;
    document.getElementById('recover').innerHTML= obj.TotalRecovered;
    document.getElementById('death').innerHTML= obj.TotalDeaths;
    document.getElementById('newConfirm').innerHTML= obj.NewConfirmed;
    document.getElementById('newRecover').innerHTML= obj.NewRecovered;
    document.getElementById('newDeath').innerHTML= obj.NewDeaths;
    document.getElementById('time').innerHTML= obj.Date;
  
}
country_name.addEventListener('change',function(event){
    // console.log(event.target.value)
for( var i=0;i<commArr.Countries.length;i++)
{
    if(commArr.Countries[i].Country== event.target.value)
    {
      displayResults(commArr.Countries[i])  
    }
}
}) 
fetchAllData();
// Country: "India"
// CountryCode: "IN"
// Date: "2020-05-26T12:20:42"
// NewConfirmed: 6414
// NewDeaths: 148
// NewRecovered: 3014
// Slug: "india"
// TotalConfirmed: 144950
// TotalDeaths: 4172
// TotalRecovered: 60706
