window.addEventListener("load", () => {
    const form = document.querySelector("#form")
    const input = document.querySelector("#todoInput");
    const todoList = document.querySelector("#todoList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;

        const task_el = document.createElement('div');
        const task_content_el = document.createElement('div');
        const task_input_el = document.createElement('input');
        const task_actions_el = document.createElement('div');
        const task_edit_el = document.createElement('button');
        const task_delete_el = document.createElement('button');

        task_el.classList.add('task');
        task_content_el.classList.add('task_content');

        // task_input_el
        task_input_el.classList.add('task_input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_actions_el.classList.add('task_actions');

        task_edit_el.classList.add('task_edit');
        task_edit_el.innerText = "Edit"

        task_delete_el.classList.add('task_delete');
        task_delete_el.innerText = "Delete"

        task_el.appendChild(task_content_el);
        task_el.appendChild(task_actions_el);

        task_content_el.appendChild(task_input_el);

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        todoList.appendChild(task_el);
        input.value = ""

        task_edit_el.addEventListener("click", () => {

            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save"
                task_edit_el.removeAttribute("readonly");
                task_edit_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_edit_el.setAttribute("readonly", "readonly")
            }
        });

        task_delete_el.addEventListener("click", () => {
            todoList.removeChild(task_el)
        });
    })
})