document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const radioOptions = document.querySelectorAll('.radio-option');
    const successToast = document.getElementById('success-toast');

    // Add selected class to radio buttons for styling
    radioOptions.forEach(option => {
        option.addEventListener('click', () => {
            clearError(document.querySelector('fieldset'));
            radioOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            showSuccessToast();
            form.reset();
            radioOptions.forEach(opt => opt.classList.remove('selected'));
        }
    });

    function validateForm() {
        let isValid = true;
        // Validate First Name
        isValid &= validateRequiredField('first-name', 'This field is required');
        // Validate Last Name
        isValid &= validateRequiredField('last-name', 'This field is required');
        // Validate Email
        isValid &= validateEmail();
        // Validate Query Type
        isValid &= validateRadioGroup();
        // Validate Message
        isValid &= validateRequiredField('message', 'This field is required');
        // Validate Consent
        isValid &= validateCheckbox();

        return !!isValid;
    }

    function validateRequiredField(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        const isValid = field.value.trim() !== '';
        
        if (field.value.trim() === '') {
            showError(field, errorMessage);
            field.setAttribute('aria-invalid', 'true');
            return false;
        }
        hideError(field);
        field.setAttribute('aria-invalid', 'false');
        return true;
    }

    function validateEmail() {
        const emailField = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailField.value);

        if (emailField.value.trim() === '') {
            showError(emailField, 'This field is required');
            emailField.setAttribute('aria-invalid', 'true');
            return false;
        } else if (!emailRegex.test(emailField.value)) {
            showError(emailField, 'Please enter a valid email address');
            emailField.setAttribute('aria-invalid', 'true');
            return false;
        }
        hideError(emailField);
        emailField.setAttribute('aria-invalid', 'false');
        return true;
    }

    function validateRadioGroup() {
        const queryType = document.querySelector('input[name="queryType"]:checked');
        const fieldset = document.querySelector('fieldset');

        if (!queryType) {
            showError(fieldset, 'Please select a query type');
            fieldset.setAttribute('aria-invalid', 'true');
            return false;
        }
        hideError(fieldset);
        fieldset.setAttribute('aria-invalid', 'false');
        return true;
    }

    function validateCheckbox() {
        const consentCheckbox = document.getElementById('consent');
        if (!consentCheckbox.checked) {
            showError(consentCheckbox, 'To submit this form, please consent to being contacted');
            return false;
        }
        hideError(consentCheckbox);
        return true;
    }

    function showError(field, message) {
        field.setAttribute('aria-invalid', 'true');
        const formGroup = field.closest('.form-group');
        const errorContainer = formGroup.querySelector('.error-message');
        formGroup.classList.add('error');
        errorContainer.textContent = message;
        errorContainer.style.display = 'block'; // Make sure the error message is visible
    }

    function hideError(field) {
         field.setAttribute('aria-invalid', 'false');
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            formGroup.classList.remove('error');
            const errorContainer = formGroup.querySelector('.error-message');
            errorContainer.textContent = '';
            errorContainer.style.display = 'none';
        }
        formGroup.classList.remove('error');
    }

    function showSuccessToast() {
        successToast.classList.add('show');
        setTimeout(() => {
            successToast.classList.remove('show');
        }, 4000);
    }

    function clearError(element) {
        const errorContainer = element.querySelector('.error-message');
        element.classList.remove('error');
        errorContainer.textContent = '';
    }
});