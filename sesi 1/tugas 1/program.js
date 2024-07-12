let inputNama = prompt ("masukan nama anda : ");
let confirmNama = confirm (`Hai ${inputNama} apakah saya tampan?`);

if (confirmNama == true){
    alert("oh thanks!!");
}else{
    alert("why ?!!");
}