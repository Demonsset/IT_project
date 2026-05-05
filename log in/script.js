document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.querySelector('.sync-icon');
    const body = document.body;

    if (modeToggle) {
        modeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            body.classList.toggle('light-mode');
            const icon = this.querySelector('i');
            
            if (body.classList.contains('light-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun'); 
                icon.style.color = '#f4b400';
            } else {
                icon.classList.replace('fa-sun', 'fa-moon'); 
                icon.style.color = '#ad936d'; 
            }
        });
    }

    const layoutToggle = document.getElementById('layoutToggle');
    if (layoutToggle) {
        layoutToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Layout button clicked!"); 
            document.body.classList.toggle('sidebar-mode');
            
            const icon = this.querySelector('i');
            if (icon) {
                if (document.body.classList.contains('sidebar-mode')) {
                    icon.style.transform = 'rotate(90deg)'; 
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    }

    const loginForm = document.getElementById('epicLogin');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const usernameInput = this.querySelector('input[type="text"]');
            const passwordInput = this.querySelector('input[type="password"]');
            const username = usernameInput.value.trim();
            const password = passwordInput.value;
            
            // Validation
            const nameRegex = /^[a-zA-Z\s\u0600-\u06FF]+$/;
            if (!nameRegex.test(username)) {
                alert("Please Enter The Name (Letters Only)");
                usernameInput.focus();
                return;
            }
            const passwordRegex = /^\d{8,}$/;
            if (!passwordRegex.test(password)) {
                alert("The Password Must be at least 8 digits Long (Numbers Only)");
                passwordInput.focus();
                return;
            }
            handleSuccess(username);
        });
    }
});

function handleSuccess(name) {
    const btn = document.querySelector('.btn-epic');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening Portal...';  
    setTimeout(() => {
        alert(`Welcome back, ${name}.`);
        btn.innerHTML = '<i class="fas fa-door-open"></i> Open The Time Portal';
    }, 1000);
}
