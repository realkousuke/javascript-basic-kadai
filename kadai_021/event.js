const change = document.getElementById('btn');

change.addEventListener('click', ()=>{
    setTimeout(() => {
        document.getElementById('text').innerHTML ='ボタンがクリックされました'
}, 2000);
});
