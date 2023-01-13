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

        // task_el.classList.add('task');
        // task_content_el.classList.add('task_content');

        // // task_input_el
        // task_input_el.classList.add('task_input');
        // task_input_el.classList.add('text');
        // task_input_el.type = 'text';
        // task_input_el.value = task;
        // task_input_el.setAttribute('readonly', 'readonly');

        // task_actions_el.classList.add('task_actions');

        // task_edit_el.classList.add('task_edit');
        // task_edit_el.innerText = "Edit"

        // task_delete_el.classList.add('task_delete');
        // task_delete_el.innerText = "Delete"

        // task_el.appendChild(task_content_el);
        // task_el.appendChild(task_actions_el);

        // task_content_el.appendChild(task_input_el);

        // task_actions_el.appendChild(task_edit_el)
        // task_actions_el.appendChild(task_delete_el)

        //? task_el
        task_el.classList.add('task');

        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        //? task_input_el
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        task_actions_el.classList.add('actions');

        //? task_edit_el
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        //? task_delete_el
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        //? appending Child's
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);


        input.value = '';

    })
})