function removeForm() {
    document.body.removeChild(this);
}

function createRect() {
    var maxsize = 200;
    var minsize = 50;
    var form = document.createElement('div');
    form.className = 'rect';
    form.onclick = removeForm;

    form.style.height = Math.random() * (maxsize - minsize) + minsize + 'px';
    form.style.width = form.style.height;
    form.style.left = Math.random() * (85 - 2) + 2 + '%';
    form.style.top = Math.random() * (70 - 10) + 10 + '%';
    document.body.appendChild(form);


}

function createCircle() {
    var maxsize = 200;
    var minsize = 50;
    var form = document.createElement('div');
    form.className = 'circle';
    form.onclick = removeForm;

    form.style.height = Math.random() * (maxsize - minsize) + minsize + 'px';
    form.style.width = form.style.height;
    form.style.left = Math.random() * (85 - 2) + 2 + '%';
    form.style.top = Math.random() * (70 - 10) + 10 + '%';
    document.body.appendChild(form);
}

function createTriangle() {
    var maxsize = 200;
    var minsize = 50;
    var form = document.createElement('div');
    form.className = 'triangle';
    form.onclick = removeForm;

    form.onmouseover = function () { form.style.borderBottomColor = 'yellow'; };
    form.onmouseout = function () { form.style.borderBottomColor = 'blue'; };

    form.style.border = (Math.random() * (maxsize - minsize) + minsize) / 2 + 'px' + ' solid transparent';
    form.style.borderBottom = Math.random() * (maxsize - minsize) + minsize + 'px' + ' solid blue';
    form.style.borderTop = '0px';

    form.style.left = Math.random() * (85 - 2) + 2 + '%';
    form.style.top = Math.random() * (60 - 5) + 10 + '%';
    document.body.appendChild(form);
}

function createForms(formType) {
    var count = document.getElementById('input-box').value;

    switch (formType) {
        case 'rect':
            for (var i = 0; i < count; i++)
                createRect();
            break;

        case 'circle':
            for (var i = 0; i < count; i++)
                createCircle();
            break;

        case 'triangle':
            for (var i = 0; i < count; i++)
                createTriangle();
            break;

        default:
            break;
    }
}