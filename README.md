# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission.
- Receive form validation messages if a required field is missed or the email address is not formatted correctly.
- Complete the form using only their keyboard.
- Have inputs, error messages, and the success message announced on their screen reader.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Links

- **Solution URL:** [GitHub Repository](https://github.com/noob-coder6/contact-form.git)
- **Live Site URL:** [Live Demo](https://noob-coder6.github.io/contact-form/)

## My process

### Built with

- **Semantic HTML5 markup:** For a clean and accessible structure.
- **CSS Custom Properties:** For maintainable and scalable styling.
- **Flexbox & CSS Grid:** To create a modern, responsive layout.
- **Mobile-first workflow:** Ensuring a great experience on all screen sizes.
- **Vanilla JavaScript:** For dynamic functionality and form validation.
- **ARIA Attributes:** To provide an enhanced accessible experience for screen reader users.

### What I learned

This project was a fantastic opportunity to build a form that is not only visually appealing but also highly accessible. I focused on providing clear, real-time feedback to all users.

#### Accessible Real-Time Validation

I implemented a robust validation system that provides immediate feedback. By programmatically linking error messages to their corresponding inputs with `aria-describedby` and managing the `aria-invalid` state, screen reader users are instantly informed of any validation errors.
```javascript
function showError(field, message) {
    field.setAttribute('aria-invalid', 'true');
    const formGroup = field.closest('.form-group');
    const errorContainer = formGroup.querySelector('.error-message');
    formGroup.classList.add('error');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
}
  ```

### Continued development

In the future, I plan to enhance this project by:

- **Adding Animations:** Incorporating subtle, accessible animations for the appearance of error messages and the success toast, respecting the prefers-reduced-motion media query.
- **Refactoring JavaScript:** Breaking down the script into smaller, reusable modules for better organization and maintainability.
- **Implementing Unit Tests:** Writing tests for the validation functions to ensure they are robust and reliable.

## Author

- **Frontend Mentor:** [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)
- **GitHub:** [@noob-coder6](https://github.com/noob-coder6)