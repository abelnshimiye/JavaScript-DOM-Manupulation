console.log("Hello word")

console.log(document)

const title =  document.getElementById('message');

title.textContent = 'Bye Bye';

title.addEventListener('click', ()=>{
    console.log("clicked");
    title.innerHTML = '<b>Clicked</b>';
})

title.addEventListener('mouseover', ()=>{
    console.log("On");

});

title.addEventListener('mouseleave', ()=>{
    console.log("off");
})

title.addEventListener('scroll', ()=>{
    const possitionY = window.scrollY;
    console.log(possitionY);
})


// change the color of the page when click on the button
const btn = document.getElementById('background');

btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor ='red';
})


const demofr = document.getElementsByClassName('demo');

for (i =0; i<demofr.length; i++){
    demofr[i].style.border = '1px solid orange';
}

const demoQuery = document.querySelector('#demo-query')

demoQuery.addEventListener('click', ()=>{
    demoQuery.style.backgroundColor = '#333';
})

const querySelAll = document.querySelectorAll('.demo-query-all')

querySelAll.forEach(element => {
    element.style.border ='1px solid green';
});

for(i=0; i<querySelAll.length; i++){
    querySelAll[i].style.backgroundColor = '#564578';
}

const todoList = document.querySelector('ul');

const newList = document.createElement('li');
newList.textContent ='new list'

todoList.append(newList)






// Different ways to perform AJAX Calls
// 1. JQuery ajax method 
// 2.XMLHTTPRequest
// 3.Fetch method
// 4.Other popular: axios Library, async await + fetch

//  let use the GET method on the free API bellow
const url = 'https://swapi.dev/api/people/'
// 1.
$.ajax({
    type:'GET',
    url:url,
    success: function(response){
        console.log( response)
    },
    error: function(error){
        console.log(error)
    }
})

//2
// initialize http object
const req = new XMLHttpRequest()

req.addEventListener('readystatechange', ()=>{
    if (req.readyState === 4){
        console.log('xhttp', JSON.parse(req.responseText))
    }
})

req.open('GET', url)
req.send()

// 3
fetch(url) // that return a promess you can confurm by console.log(fetch(url))
.then(resp => resp.json()).then(data => console.log('fetch',data))
.catch(err=> console.log(err))



