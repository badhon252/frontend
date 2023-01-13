window.addEventListener("load", () => {
    const form = document.querySelector("#form")
    const input = document.querySelector("#todoInput");
    const todoList = document.querySelector("#todoList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;

        const task_el = document.createElement('div');
        const task_content_el = document.createElement('div');
        task_content_el.appendChild(task_el);
        const task_input_el = document.createElement('input');
        const task_actions_el = document.createElement('div');
        const task_edit_el = document.createElement('button');
        const task_delete_el = document.createElement('button');

        task_el.classList.add('task');
        task_content_el.classList.add('task_content');
        task_input_el.classList.add('task_input');
        task_actions_el.classList.add('task_actions');
        task_edit_el.classList.add('task_edit');
        task_edit_el.innerText = "Edit"
        task_delete_el.classList.add('task_delete');
        task_delete_el.innerText = "Delete"


    })
})