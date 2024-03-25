var k=0;
var t=0;
var n=0;


var x = window.matchMedia("(max-width: 130vh)")

document.getElementById('bEd').addEventListener('click', function() {
    var div = document.getElementById('showEdd');
    
    if(k%2==0) 
    div.classList.remove('showEd'); // Make the div visible
    else div.classList.add('showEd');
    k++;
    div.scrollIntoView({behavior: 'smooth'});
     // Smoothly scroll to the div
});
document.getElementById('Edarr').addEventListener('click', function() {
    var div = document.getElementById('showEdd');
    if (!x.matches){
        if(k%2==0) 
        div.classList.remove('showEd'); // Make the div visible
        else div.classList.add('showEd');
        k++;
        div.scrollIntoView({behavior: 'smooth'});
    }
    
     // Smoothly scroll to the div
});




document.getElementById('bExp').addEventListener('click', function() {
    var div = document.getElementById('showExp');
    
    if(t%2==0) 
    div.classList.remove('showEd'); // Make the div visible
    else div.classList.add('showEd');
    t++;
    div.scrollIntoView({behavior: 'smooth'});
     // Smoothly scroll to the div
});
document.getElementById('Exparr').addEventListener('click', function() {
    var div = document.getElementById('showExp');
    if (!x.matches){
    if(t%2==0) 
    div.classList.remove('showEd'); // Make the div visible
    else div.classList.add('showEd');
    t++;
    div.scrollIntoView({behavior: 'smooth'});
    }
     // Smoothly scroll to the div
});



document.getElementById('bAw').addEventListener('click', function() {
    var div = document.getElementById('hidAw');
    
    if(n%2==0) 
    div.classList.remove('hidAw'); // Make the div visible
    else div.classList.add('hidAw');
    n++;
    div.scrollIntoView({behavior: 'smooth'});
     // Smoothly scroll to the div
});

document.getElementById('Awarr').addEventListener('click', function() {
    var div = document.getElementById('hidAw');
    if (!x.matches){
    if(n%2==0) 
    div.classList.remove('hidAw'); // Make the div visible
    else div.classList.add('hidAw');
    n++;
    div.scrollIntoView({behavior: 'smooth'});
    }
     // Smoothly scroll to the div
});



