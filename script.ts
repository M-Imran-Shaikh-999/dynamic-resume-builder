// // listing element
// document
//   .getElementById("resumeForm")
//   ?.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // type assertion
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement;
//     const educationElement = document.getElementById(
//       "education"
//     ) as HTMLInputElement;
//     const experienceElement = document.getElementById(
//       "experience"
//     ) as HTMLInputElement;
//     const skillsElement = document.getElementById("skills") as HTMLInputElement;

//     if (
//       nameElement &&
//       emailElement &&
//       phoneElement &&
//       educationElement &&
//       experienceElement &&
//       skillsElement
//     ) {
//       const name = nameElement.value;
//       const email = emailElement.value;
//       const phone = phoneElement.value;
//       const education = educationElement.value;
//       const experience = experienceElement.value;
//       const skills = skillsElement.value;

//       const resumeOutput = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> <span id> </span>${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone Number:</strong> ${phone}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Experience</h3>
//         <p>${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
// `;

//       const resumeOutputElement = document.getElementById("resumeoutput");
//       if (resumeOutputElement) {
//         resumeOutputElement.innerHTML = resumeOutput;
//       } else {
//         console.error('the resume output elements are missing');
//       }
//     } else {
//       console.error('one or more output elements are missing');
//     }
//   });

// // listing element
// document.getElementById("resumeForm")?.addEventListener("submit", function (event) {event.preventDefault();
//      event.preventDefault();

//   const nameElement = document.getElementById('name') as HTMLImageElement;
//   const emailElement = document.getElementById('email') as HTMLImageElement;
//   const phoneElement = document.getElementById('phone') as HTMLImageElement;
//   const educationElement = document.getElementById('education') as HTMLImageElement;
//   const experienceElement = document.getElementById('experience') as HTMLImageElement;
//   const skillsElement = document.getElementById('skills') as HTMLImageElement;

//   if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {

//       const name = nameElement.value;
//       const email = emailElement.value;
//       const phone = phoneElement.value;
//       const education = educationElement.value;
//       const experience = experienceElement.value;
//       const skills = skillsElement.value;

//       // Create the resume output
//       const resumeOutput = `
//           <h2>Resume</h2>
//           <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
//           <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
//           <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
//           <h3>Education</h3>
//           <p id="edit-education" class="editable">${education}</p>
//           <h3>Work Experience</h3>
//           <p id="edit-experience" class="editable">${experience}</p>
//           <h3>Skills</h3>
//           <p id="edit-skills" class="editable">${skills}</p>
//       `;

//       // Display the resume output
//       const resumeOutputElement = document.getElementById('resumeOutput');
//       if (resumeOutputElement) {
//           resumeOutputElement.innerHTML = resumeOutput;
//           makeEditable();
//       }
//   } else {
//       console.error('One or more form elements are missing.');
//   }
// });

//      function makeEditable();
//   } else {
//       console.error('One or more form elements are missing.');
//   }
// });

// function makeEditable() {
//   const editableElements = document.querySelectorAll('.editable');
//   editableElements.forEach(element => {
//       element.addEventListener('click', function() {
//           const currentElement = element as HTMLElement;
//           const currentValue = currentElement.textContent || ; //////

//           // Replace content
//           if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
//               const input = document.createElement('input');
//               input.type = 'text';
//               input.value = currentValue;
//               input.classList.add('editing-input');

//               input.addEventListener('blur', function() {
//                   currentElement.textContent = input.value;
//                   currentElement.style.display = 'inline';
//                   input.remove();
//               });

//               currentElement.style.display = 'none';
//               currentElement.parentNode?.insertBefore(input, currentElement);
//               input.focus();
//           }
//       });
//   });
// }

// 
document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLTextAreaElement;
  const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
  const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

  if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {

      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      // Create the resume output
      const resumeOutput = `
          <h2>Resume</h2>
          <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
          <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
          <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
          <h3>Education</h3>
          <p id="edit-education" class="editable">${education}</p>
          <h3>Work Experience</h3>
          <p id="edit-experience" class="editable">${experience}</p>
          <h3>Skills</h3>
          <p id="edit-skills" class="editable">${skills}</p>
      `;

      // Display the resume output
      const resumeOutputElement = document.getElementById('resumeOutput');
      if (resumeOutputElement) {
          resumeOutputElement.innerHTML = resumeOutput;
          makeEditable();
      }
  } else {
      console.error('One or more form elements are missing.');
  }
});

function makeEditable() {
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach(element => {
      element.addEventListener('click', function() {
          const currentElement = element as HTMLElement;
          const currentValue = currentElement.textContent || "";

          // Replace content
          if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
              const input = document.createElement('input');
              input.type = 'text';
              input.value = currentValue;
              input.classList.add('editing-input');

              input.addEventListener('blur', function() {
                  currentElement.textContent = input.value;
                  currentElement.style.display = 'inline';
                  input.remove();
              });

              currentElement.style.display = 'none';
              currentElement.parentNode?.insertBefore(input, currentElement);
              input.focus();
          }
      });
  });
}