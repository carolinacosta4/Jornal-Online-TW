function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}

function myFunction() {
  document.getElementById("like").style.color = "#999999";
}

function CopyText() {
  var copyText = document.getElementById("link");

  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);

  alert("Link copiado!");
}

function initPayPalButton() {
  paypal.Buttons({
  style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
      
  },

  createOrder: function(data, actions) {
      return actions.order.create({
      purchase_units: [{"amount":{"currency_code":"USD","value":1}}]
      });
  },

  onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
      alert('Transaction completed by ' + details.payer.name.given_name + '!');
      });
  },

  onError: function(err) {
      console.log(err);
  }
  }).render('#paypal-button-container');
}
initPayPalButton();