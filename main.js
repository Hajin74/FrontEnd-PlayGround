const input = document.querySelector('input');
const footerBtn = document.querySelector('.footer__btn');
const lists = document.querySelector('.lists');

function onAdd() {
    const text = input.value;

    if(text === '') { // 텍스트창이 비어있으면 목록 추가 불가
        input.focus();
        return;
    }

    const list = makeList(text);
    lists.appendChild(list);

    input.focus();
    list.scrollIntoView();
    input.value = '';

}

let id = 0;
function makeList(text) {
    const list = document.createElement('li');
    list.setAttribute('class', 'list');
    //list.setAttribute('data-id', id);
    list.innerHTML = `
        <button class="list__done">
            <i class="fas fa-check-circle"></i>
        </button>
        <div class="list__text">
            ${text}
        </div>
        <button class="list__delete" data-set="${id}">
            <i class="fas fa-trash"></i>
        </button>
    `;
    id++;

    const deleteBtn = list.querySelector('.list__delete');
    deleteBtn.addEventListener('click', ()=>{
        lists.removeChild(list);
    });

    const doneBtn = list.querySelector('.list__done');
    doneBtn.addEventListener('click', ()=>{
        console.log(doneBtn);
        doneBtn.classList.toggle('checked');
    });

    return list;
}


// 버튼 클릭하면 목록 추가 함수 실행
footerBtn.addEventListener('click', ()=>{
    onAdd();
})

input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter') {
        onAdd();
    }
})

