window.onscroll = function() {
    let scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
};

// Скроллить вверх при нажатии на кнопку
document.getElementById("scrollToTopButton").onclick = function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
};

//MODAL
const openModalButton = document.querySelector('#header__btn');

openModalButton.addEventListener('click', () => {
    const modalWrapper = createDiv('modalWrapper');
    const backdrop = createDiv('backdrop');
    bodyLock();

    setTimeout(() => {
        modalWrapper.classList.add('modal-show');
    }, 0)
    
    backdrop.addEventListener('click', () => {
        closeModal();
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    const modalForm = document.createElement('form');
    modalForm.className = 'modalForm';

    const modalContainer = createDiv('modal');
    const formName = createDiv('formName formItem');
    const formEmail = createDiv('formEmail formItem');
    const cross = createButton('modalCross', 'X', closeModal);
    const inputName = createInput('text', 'Name', 'formInput');
    const inputLastName = createInput('text', 'Last Name', 'formInput');
    const inputEmail = createInput('text', 'Email', 'formInput');
    const buttonSubmit = createButton('button', 'Submit', closeModal);
    
    document.body.append(modalWrapper);
    modalWrapper.append(backdrop);
    modalWrapper.append(modalContainer);
    
    modalContainer.append(cross);
    modalContainer.append(modalForm);
    modalForm.append(formName);
    modalForm.append(inputLastName);
    modalForm.append(formEmail);
    formName.append(inputName);
    formEmail.append(inputEmail);
    modalContainer.append(buttonSubmit);
});

function closeModal() {
    const modal = document.querySelector('.modalWrapper');
    if (!modal) {
        return;
    }
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.remove();
        unlockBody();
    }, 300)
};

function createInput(type = 'text', placeholder = '', className) {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('placeholder', placeholder);
    input.className = className;
    return input;
};

export function createButton(className, text, func) {
    const button = document.createElement('button');
    button.className = className;
    button.setAttribute('type', 'button');
    button.innerText = text;
    button.addEventListener('click', () => {  
        func();
    })
    return button;
};

export function createDiv(className = '') {
    const div = document.createElement('div');
    if (className) {
        div.className = className;
    }
    return div;
};

export function bodyLock() {
    const scrollBarWidth = getScrollBarWidth(); // Получаем ширину скролла
    document.body.style.paddingRight = `${scrollBarWidth}px`; // Добавляем её к паддингу справа
    document.body.classList.add('no-scroll'); // Блокируем скролл
};

export function unlockBody() {
    document.body.style.paddingRight = ''; // Убираем добавленный паддинг
    document.body.classList.remove('no-scroll'); // Разблокируем скролл
}

function getScrollBarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // Принудительно включаем скролл
    outer.style.width = '100px';
    document.body.append(outer);

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const scrollBarWidth = outer.offsetWidth - inner.offsetWidth; // Разница между полной шириной и контентом
    outer.remove();

    return scrollBarWidth;
}
