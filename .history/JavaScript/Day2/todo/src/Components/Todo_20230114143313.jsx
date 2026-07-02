import React from 'react'

export default function Todo() {
  return (
    <div>
         <h1>MyTask Management system</h1>
     <section class="todo">
        <form action="#" id="form">
            <div id="addSection">
                <input type="text" id="todoInput" placeholder="Type your todo here"/>
                <button type="submit" for="todoInput" class="btn">Add</button>
               
            </div>
        </form>


        <div id="todoList">
            <h1>Task Lists : </h1>

            {/* <div class="task">
                    <div class="content">
                        <input type="text" class="text" value="A new task" readonly>
                    </div>
                    <div class="actions">
                        <button class="task_edit"></button>
                        <button class="task_delete"></button>
                    </div>
                </div>  */}

        </div>

    </section>
    </div>
  )
}
