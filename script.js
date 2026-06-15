const formWithData = document.querySelector("#logForm");
formWithData.addEventListener("submit" , function (e) {
    e.preventDefault();

    const formData = new FormData(formWithData);
    const name = formData.get("name");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const errors = [];

    if (!name || !name.trim()){
        document.querySelector("#error-name").classList.toggle("goError")
    }
    if (message.length < 5){
        document.querySelector("#error-message").classList.toggle("goError")
    }
    if (!/^\+380\d{9}$/.test(phone)){
        document.querySelector("#error-phone").classList.toggle("goError")
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.querySelector("#error-email").classList.toggle("goError")
    }
console.log(name,message,phone,email);
this.reset();
})