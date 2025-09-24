let btn = document.getElementById("top");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};


// let co = document.querySelector("#con");

// co.onclick = function () {
//     window.print();
// };


const cart = [];

const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');

        cart.push({ name, price });



        Swal.fire({
            title: `${name} has been added to your cart!`,
            icon: "success",
            iconColor: 'rgb(255, 211, 33)',
            draggable: true
        });

        console.log("cart");


        localStorage.setItem('gymCart', JSON.stringify(cart));
    });
});








