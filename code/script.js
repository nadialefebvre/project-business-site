// accordion
const accordion = document.getElementsByClassName('accordion-question');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      // means that if `answer` has a height (is open), put it at `null` (close it)
      answer.style.maxHeight = null;
    } else {
      // otherwise (if `answer` has no height), put the other answers' height at `null` (close them) if there are any
      const active = document.querySelectorAll('.accordion-question.active');
      for (let i = 0; i < active.length; i++) {
        active[i].classList.remove('active');
        active[i].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle('active'); // ... and open the answer for the question clicked
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}

// button back to top, get the button
const buttonTop = document.getElementById('buttonTop');

// when the user scrolls down Xpx from the top of the document, show the button
window.addEventListener('scroll', function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    buttonTop.style.display = 'block';
  } else {
    buttonTop.style.display = 'none';
  }
});
// and when the user clicks on the button, scroll to the top of the document
buttonTop.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// when toggling child and adult modes
const adult = document.getElementById('buttonToggle');

let modeAdult = false;
adult.addEventListener('click', function () {
  modeAdult = !modeAdult;
  if (modeAdult) {
    displayAdult();
  } else {
    displayChild();
  }
  document.getElementById('formSignup').reset();
});

document.addEventListener('DOMContentLoaded', displayChild);

function displayChild() {
  document.getElementById('heroSubtitle').innerText = 'vegetables';
  document.getElementById('videoChild').style.display = 'block';
  document.getElementById('videoAdult').style.display = 'none';
  document.getElementById('nameField').innerText = 'Your child\'s name';
  document.getElementById('instruction').innerText = 'your child';
  document.getElementById('selectChild').innerText = 'child\'s ';
  document.getElementById('select1').innerText = '0-2 years old';
  document.getElementById('select2').innerText = '3-5 years old';
  document.getElementById('select3').innerText = '6-9 years old';
  document.getElementById('select4').innerText = '10-13 years old';
  document.getElementById('select5').innerText = '14-17 years old';
  document.getElementById('checkTitle').innerText = 'types of vegetables that your child like';
  document.getElementById('check1').innerText = ' Leafy';
  document.getElementById('check2').innerText = ' Root';
  document.getElementById('check3').innerText = ' Beans';
  document.getElementById('check4').innerText = ' Squashes';
  document.getElementById('check5').innerText = ' Fruits';
  document.getElementById('check6').innerText = ' Cruciferous';
  document.getElementById('buttonSubmit').innerText = 'Please register my child!';
  document.getElementById('questionBusiness').innerText = 'grocery store';
  document.getElementById('answerWho').innerText = 'your child';
  document.getElementById('answerType').innerText = 'vegetables';
  document.getElementById('questionType').innerText = 'vegetables';
  document.getElementById('relatedType').innerText = 'vegetable';
  document.getElementById('buttonToggle').innerText = 'Interested in our 18+ services?';

  const greenMedium = document.querySelectorAll('.signup-item .button-submit, .accordion-answer, footer .footer-button, #buttonToggle, #buttonTop');
  for (let i = 0; i < greenMedium.length; i++) {
    greenMedium[i].style.backgroundColor = '#87A93A';
  }
  
  const greenDark = document.querySelectorAll('html');
  for (let i = 0; i < greenDark.length; i++) {
    greenDark[i].style.color = '#3d4c1a';
  }

  const buttonHover = document.querySelectorAll(
    '#buttonSubmit, #buttonToggle, #buttonTop'
  );

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener(
      'mouseover',
      function (eventB) {
        eventB.target.style.backgroundColor = '#3d4c1a';
      },
      false
    );
  }

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener(
      'mouseout',
      function (eventB) {
        eventB.target.style.backgroundColor = '#87A93A';
      },
      false
    );
  }
}

function displayAdult() {
  document.getElementById('heroSubtitle').innerText = 'fruits';
  document.getElementById('videoChild').style.display = 'none';
  document.getElementById('videoAdult').style.display = 'block';
  document.getElementById('nameField').innerText = 'Your name';
  document.getElementById('instruction').innerText = 'you';
  document.getElementById('selectChild').innerText = '';
  document.getElementById('select1').innerText = '18-30 years old';
  document.getElementById('select2').innerText = '31-40 years old';
  document.getElementById('select3').innerText = '41-50 years old';
  document.getElementById('select4').innerText = '51-60 years old';
  document.getElementById('select5').innerText = '61+ years old';
  document.getElementById('checkTitle').innerText = 'fruits that interest you';
  document.getElementById('check1').innerText = ' Banana';
  document.getElementById('check2').innerText = ' Cherry';
  document.getElementById('check3').innerText = ' Strawberry';
  document.getElementById('check4').innerText = ' Pomegranate';
  document.getElementById('check5').innerText = ' Peach';
  document.getElementById('check6').innerText = ' Papaya';
  document.getElementById('buttonSubmit').innerText = 'Please register me!';
  document.getElementById('questionBusiness').innerText = 'sex shop';
  document.getElementById('answerWho').innerText = 'yourself alone';
  document.getElementById('answerType').innerText = 'fruits';
  document.getElementById('questionType').innerText = 'fruits';
  document.getElementById('relatedType').innerText = 'fruit';
  document.getElementById('buttonToggle').innerText = 'Back to our child services';

  const redMedium = document.querySelectorAll(
    '.signup-item .button-submit, .accordion-answer, footer .footer-button, #buttonToggle, #buttonTop'
  );
  for (let i = 0; i < redMedium.length; i++) {
    redMedium[i].style.backgroundColor = '#EA5E5A';
  }
  
  const darkRed = document.querySelectorAll('html');
  for (let i = 0; i < darkRed.length; i++) {
    darkRed[i].style.color = '#71120f';
  }

  const buttonHover = document.querySelectorAll(
    '#buttonSubmit, #buttonToggle, #buttonTop'
  );

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener(
      'mouseover',
      function (eventB) {
        eventB.target.style.backgroundColor = '#71120f';
      },
      false
    );
  }

  for (let i = 0; i < buttonHover.length; i++) {
    buttonHover[i].addEventListener(
      'mouseout',
      function (eventB) {
        eventB.target.style.backgroundColor = '#EA5E5A';
      },
      false
    );
  }
}

// reset the fields after submitting the form 
// commented out, since it resets the form BEFORE submitting, needs some googling
// const submitForm = document.getElementById('formSignup');

// submitForm.addEventListener('submit', function () {
//   this.reset();
//   document.getElementsByName('contact').checked = 'false';
// });