async function googleSearch(query){
try{
    let api         = await fetch(`http://api.serpstack.com/search?access_key=18a5d97fb4db0f9b0460d6d65df00cc0&query=${query}`);
    let dataAccess  = await api.json();

    console.log(dataAccess);
    return dataAccess;
}catch(err){
    console.log(err)
}
}

function createClass(elem,elemClass=''){
    let element = document.createElement(elem);
    element.setAttribute('class',elemClass);
    return element;
}




let button = document.getElementById('datainput');
button.addEventListener('click',function(e){

        e.preventDefault();
    let queryStr = document.getElementById('queryString').value;
   
   
    googleSearch(queryStr).then((data)=>{
    var dataDisp = document.getElementById('dataDisplay');
    
    for(let i=0; i<data.organic_results.length; i++){
        let para = createClass('p','text-success');
        para.innerHTML = data.organic_results[i].domain;
        let anchor = createClass('a');
        anchor.innerHTML = data.organic_results[i].title;
        anchor.setAttribute('href',`${data.organic_results[i].url}`);
        anchor.setAttribute('target','_blank');
        anchor.style.margin = '-25px;'
        dataDisp.append(anchor,para)
    }

    let results = document.getElementById('results');
    results.innerHTML = (`About ${data.search_information.total_results} results (${data.search_information.time_taken_displayed} seconds)`);
})
 
})




