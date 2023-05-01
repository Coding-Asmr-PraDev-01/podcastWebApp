const toggleSwitch = document.querySelector('.toggleSwitch');
toggleSwitch.addEventListener('change', function(){
    if(this.checked){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
});