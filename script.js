let cards = document.querySelectorAll('.card');
for (let card of cards) {
  card.addEventListener('mouseover', function () {
    card.style.backgroundColor = '#fff3e0';
    card.style.color = 'black';
  });
  card.addEventListener('mouseout', function () {
    card.style.backgroundColor = '';
    card.style.color = '';
  });
}

let form = document.getElementById('feedbackForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let name = document.getElementById('username').value.trim();
  let email = document.getElementById('useremail').value.trim();
  let message = document.getElementById('formMessage');
  let discount = document.getElementById('discountMessage');

  if (name === '' || email === '') {
    message.textContent = 'Please fill both name and email.';
    discount.textContent = '';
    return;
  }

  message.textContent = 'Thank you for visiting, ' + name + '! We will contact you at ' + email + '.';

  let birthYear = parseInt(document.getElementById('birth-year').value);
  if (isNaN(birthYear)) {
    discount.textContent = '';
  } else {
    let age = 2026 - birthYear;
    if (age >= 60) {
      discount.textContent = 'Senior discount applied!';
    } else if (age >= 16 && age <= 25) {
      discount.textContent = 'Student discount applied!';
    } else {
      discount.textContent = 'No discount available.';
    }
  }
});

let rows = document.querySelectorAll('tbody tr');
for (let row of rows) {
  row.addEventListener('mouseover', function () {
    row.style.backgroundColor = '#ffe0b2';
    row.style.color = 'black';
  });
  row.addEventListener('mouseout', function () {
    row.style.backgroundColor = '';
    row.style.color = '';
  });
}

let themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

let items = document.querySelectorAll('.item');
let totalText = document.getElementById('total');
for (let item of items) {
  item.addEventListener('change', function () {
    let sum = 0;
    for (let i of items) {
      if (i.checked) {
        sum = sum + parseInt(i.value);
      }
    }
    totalText.textContent = 'Total: Rs. ' + sum;
  });
}

let readMoreBtn = document.getElementById('readMoreBtn');
let moreText = document.getElementById('moreText');
readMoreBtn.addEventListener('click', function () {
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
    readMoreBtn.textContent = 'Read Less';
  } else {
    moreText.style.display = 'none';
    readMoreBtn.textContent = 'Read More';
  }
});

let filterBtns = document.querySelectorAll('.filter-btn');
for (let btn of filterBtns) {
  btn.addEventListener('click', function () {
    let category = btn.textContent;
    for (let row of rows) {
      if (category === 'All' || row.dataset.category === category) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  });
}

let status = document.getElementById('status');
let hour = new Date().getHours();
if (hour >= 8 && hour < 22) {
  status.textContent = 'We are Open!';
  status.style.color = 'green';
} else {
  status.textContent = 'Closed - Open at 8 AM';
  status.style.color = 'red';
}

let request = document.getElementById('request');
let charCount = document.getElementById('charCount');
request.addEventListener('input', function () {
  charCount.textContent = 'Characters: ' + request.value.length;
});
