let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let btnFour = document.getElementById('btnFour');

let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let row4 = document.getElementById('row4');

btnOne.addEventListener('click', function () {
    btnOne.classList.add('text-danger', 'fw-bold', 'border-bottom');
    btnTwo.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnThree.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnFour.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    row1.classList.remove('d-none');
    row2.classList.add('d-none');
    row3.classList.add('d-none');
    row4.classList.add('d-none');
})

btnTwo.addEventListener('click', function () {
    btnOne.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnTwo.classList.add('text-danger', 'fw-bold', 'border-bottom');
    btnThree.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnFour.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    row1.classList.add('d-none');
    row2.classList.remove('d-none');
    row3.classList.add('d-none');
    row4.classList.add('d-none');
})

btnThree.addEventListener('click', function () {
    btnOne.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnTwo.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnThree.classList.add('text-danger', 'fw-bold', 'border-bottom');
    btnFour.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    row1.classList.add('d-none');
    row2.classList.add('d-none');
    row3.classList.remove('d-none');
    row4.classList.add('d-none')
})

btnFour.addEventListener('click', function () {
    btnOne.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnTwo.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnThree.classList.remove('text-danger', 'fw-bold', 'border-bottom');
    btnFour.classList.add('text-danger', 'fw-bold', 'border-bottom');
    row1.classList.add('d-none');
    row2.classList.add('d-none');
    row3.classList.add('d-none');
    row4.classList.remove('d-none');
})

let add = document.getElementsByClassName("add-to-cart");
let remove = document.getElementsByClassName("remove-from-cart");
let cart = document.getElementById('cart');
let clearBtn = document.getElementById('clear');

cart.textContent = 0;

for (const addBtn of add) {
    addBtn.addEventListener('click', function () {
        let spanAmount = this.nextElementSibling;
        let removeBtn = this.nextElementSibling.nextElementSibling;
        if (spanAmount.textContent >= 0) {
            addBtn.classList.add('btn-success');
            addBtn.classList.remove('btn-primary');
            removeBtn.classList.add('btn-danger');
            removeBtn.classList.remove('btn-secondary')
            removeBtn.disabled = false;
        }
        spanAmount.textContent = +spanAmount.textContent + 1;
        // console.log(spanAmount.textContent);
        // console.log(cart);
        cart.textContent = +cart.textContent + 1;
    })
}

for (const removeBtn of remove) {
    removeBtn.addEventListener("click", function () {
        let spanAmount = this.previousElementSibling;
        let addBtn = this.previousElementSibling.previousElementSibling;
        if (spanAmount.textContent <= 1) {
            addBtn.classList.add('btn-primary');
            addBtn.classList.remove('btn-success');
            removeBtn.classList.add('btn-secondary');
            removeBtn.classList.remove('btn-danger')
            removeBtn.disabled = true;
        }
        spanAmount.textContent = +spanAmount.textContent - 1;
        // console.log(spanAmount.textContent);
        // console.log(cart);
        cart.textContent = +cart.textContent - 1;
    })
}

clearBtn.addEventListener("click", function () {
    let spanAmount = document.querySelectorAll(".spanAmount");
    clearBtn.addEventListener('click', function () {
        for (const addBtn of add) {
            let spanAmount = addBtn.nextElementSibling;
            let removeBtn = addBtn.nextElementSibling.nextElementSibling;
            addBtn.classList.remove('btn-success');
            addBtn.classList.add('btn-primary');
            removeBtn.classList.remove('btn-danger');
            removeBtn.classList.add('btn-secondary');
            removeBtn.disabled = true;
            spanAmount.textContent = 0;
            cart.textContent = 0;
        }
    })
})

const btnChevron = document.getElementById('chevron');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnChevron.style.display = "block";
  } else {
    btnChevron.style.display = "none";
  }
}

btnChevron.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

let loader = document.getElementById('preloader');

setTimeout(() => {
    window.onload = loader.style.display = "none";
}, 2000);


console.log(loader);