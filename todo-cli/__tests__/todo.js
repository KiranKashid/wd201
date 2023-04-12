const todoList = require("../todo");
const {all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("todolist test suite", () => {
    let dateToday = new Date();
    const today = dateToday.toLocaleDateString("en-CA");
    let yesterday = new Date(new Date().setDate(dateToday.getDate() - 1));
    yesterday = yesterday.toLocaleDateString("en-CA");
    let tomorrow = new Date(new Date().setDate(dateToday.getDate() + 1));
    tomorrow = tomorrow.toLocaleDateString("en-CA");
    

    test("Create todo", () => {
        expect(all.length).toBe(0);
        add({ title: "test new todo.js", dueDate: today, completed: false });
        expect(all.length).toBe(1);
    });

    test("completed", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);

    });

    test("items overdue", () => {
        add({ title: "test new todo.js", dueDate: yesterday, completed: false });
        expect(overdue().length).toBe(1);
    });

    test("items due is today", () => {
        expect(dueToday().length).toBe(1);
    });

    test("items due is later", () => {
        add({ title: " test new todo.js", dueDate: tomorrow, completed: false});
        expect(dueLater().length).toBe(1);
    });

});
