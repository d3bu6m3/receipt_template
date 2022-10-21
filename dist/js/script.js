let input = document.getElementById("input-logo");
let inputClose = document.getElementById("input-file-close");
let imageName = document.getElementById("input-file-name");

input.addEventListener("change", ()=>{
    let inputImage = document.querySelector("input[type=file]").files[0];

    imageName.innerHTML = inputImage.name;
    inputClose.innerHTML = '<i class="ion ion-md-close"></i>';
});

inputClose.addEventListener("click", ()=>{

    imageName.innerHTML = '';
    inputClose.innerHTML = ' ';
});