let modal = document.getElementById("myModal");

let allBtns = document.querySelectorAll('#whatWeTreat .bubble')


let span = document.getElementsByClassName("close")[0];



allBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        showModal(this.getAttribute('data-name'))
    })
})

function showModal(name){
    if(name === 'adhd'){
        modal.style.display = 'block'
        document.getElementById('theTitle').textContent = adhd.title
        document.getElementById('theBody').innerHTML = adhd.body
    }else if(name === 'anx'){
         modal.style.display = 'block'
        document.getElementById('theTitle').textContent = anx.title
        document.getElementById('theBody').innerHTML = anx.body
    }else if(name === 'bip'){
        modal.style.display = 'block'
       document.getElementById('theTitle').textContent = bip.title
       document.getElementById('theBody').innerHTML = bip.body
   }else if(name === 'depr'){
        modal.style.display = 'block'
        document.getElementById('theTitle').textContent = depr.title
        document.getElementById('theBody').innerHTML = depr.body
    }else if(name === 'schiz'){
        modal.style.display = 'block'
        document.getElementById('theTitle').textContent = schiz.title
        document.getElementById('theBody').innerHTML = schiz.body
    }else if(name === 'panA'){
        modal.style.display = 'block'
        document.getElementById('theTitle').textContent = panA.title
        document.getElementById('theBody').innerHTML = panA.body
    }else if(name === 'ptsd'){
        modal.style.display = 'block'
        document.getElementById('theTitle').textContent = ptsd.title
        document.getElementById('theBody').innerHTML = ptsd.body
    }else if(name === 'grief'){
        modal.style.display = 'block'
        document.getElementById('theTitle').textContent = grief.title
        document.getElementById('theBody').innerHTML = grief.body
    }else if(name === 'ocd'){
        modal.style.display = 'block'
        document.getElementById('theTitle').textContent = ocd.title
        document.getElementById('theBody').innerHTML = ocd.body
    }else{
        return
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}