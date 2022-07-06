document.getElementById('button').addEventListener('click', function(){
 document.querySelector('.share').style.display = 'flex';
 document.getElementById('buttonCloseOne').style.display ='inline-block'
 
});

function init(){
 document.querySelector(".share").style.display = "none";
 document.getElementById("buttonClose").style.display = "none";
 document.getElementById("button").style.display = "block";
 
}

document.getElementById('buttonCloseOne').addEventListener('click', init);

