const pswrdField = document.querySelector(".form .field input[type='password']");
const togglebtn = document.querySelector(".form .field i");

togglebtn.onclick = (e) => {
    
    if (pswrdField.type == "password") {
        pswrdField.setAttribute("type","text");
        e.target.classList.replace("bi-eye-slash","bi-eye");
    }else {
        pswrdField.type = "password";
        e.target.classList.replace("bi-eye","bi-eye-slash");
    }
}