//==============
// Mobile Nevigration Menu 

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if(menuBtn && navLinks) {
     menuBtn.addEventListener("click" , function (){
        navLinks.classList.toggle("show");
        const isExpanded = navLinks.classList.contains("show");
        menuBtn.setAttribute("aria-expanded", isExpanded)
     });
}


//===============================
//    2 contact form ======== //

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
if(contactForm & formMessage) {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDestination = urlParams("destinaction");
    const destinationSelect = document.getElementById("destinaction");
    if(selectedDestination & destinationSelect){
        const validDestinations =[
            "Manali",
            "Dubai",
            "Maldives",
            "Jaipur",
            "Bali",
            "Kashmir"
        ];
        if (validDestinations.includes(selectedDestination)){
            destinationSelect.value = selectedDestination;
        }
    }
    //  form submit Event====
    // =====================//

    contactForm.addEventListener("submit", function(event){
        event.preventDefault();
        const name =document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const destinaction = destinationSelect.value;
        const message = document.getElementById("message").value.trim()
        // check empty fields

        if(
            name === "" ||
            email === "" ||
            phone === "" ||
            destinaction === "" ||
            message === ""
        ){
            formMessage.textContent = "please fill in all fields.";
            formMessage.style.color = "yellow"
        }

        // ==== validate name
        if(name.length < 2) {
            formMessage.textContent
            "please Enter a name With att Least 2 Character"
            formMessage.style.color = "yellow"
            return;
        } 
        
        // ==== validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            formMessage.textContent=
            "please enter a valied email address"
            formMessage.style.color = "yellow"
            return;
        }
        // ===validate phone number

        const phonePattern = /^[6-9]\d{9}$/;
        if(!phonePattern.test(phone)){
            formMessage.textContent =
            "please emter a 10 digit indian Mobile number.";
            formMessage.style.color = "yellow"
            return;
        }

        // ====== validate massage
        if(message.length < 10) {
            formMessage.textContent = 
            "please enter a message with att least 10 characters"
            formMessage.style.color = "yellow"
            return;
        }
        // ===== Display success message

        formMessage.textContent = 
        "Thankyou," +name+
        "! Your Travel Enquiry  has been validated successfully. " +
        "selected destinaction:" + destinaction + ".";
        formMessage.style.color ="Red";
        //====reset form
        contactForm.reset();
    });
}
