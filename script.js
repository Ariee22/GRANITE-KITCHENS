const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const service =
    document.getElementById("service").value;

  const message =
    document.getElementById("message").value.trim();


  if (!name || !phone) {

    formMessage.textContent =
      "Please enter your name and phone number.";

    return;
  }


  const whatsappNumber =
    "263775188689";


  const whatsappMessage =
    `Hello GRANITE COUNTERTOP AND KITCHENS. I would like to request a quotation.%0A%0A` +

    `Name: ${encodeURIComponent(name)}%0A` +

    `Phone: ${encodeURIComponent(phone)}%0A` +

    `Service: ${encodeURIComponent(service)}%0A` +

    `Project: ${encodeURIComponent(message)}`;


  window.open(
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    "_blank"
  );


  formMessage.textContent =
    "Opening WhatsApp so you can send your quotation request.";


  form.reset();

});
