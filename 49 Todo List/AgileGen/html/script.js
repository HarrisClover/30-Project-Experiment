document.addEventListener("DOMContentLoaded", () => {
    const addItemInput = document.getElementById("add-item-input");
    const addItemButton = document.getElementById("add-item-button");
    const itemList = document.getElementById("item-list");

    addItemButton.addEventListener("click", () => {
        const text = addItemInput.value.trim();

        if (text) {
            const newItem = createListItem(text);
            itemList.appendChild(newItem);
            addItemInput.value = "";
            saveItems();
        }
    });

    itemList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            saveItems();
        } else if (e.target.tagName === "INPUT") {
            saveItems();
        }
    });

    function createListItem(text) {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    function saveItems() {
        const items = Array.from(document.querySelectorAll("#item-list li span")).map(
            (span) => span.textContent
        );
        localStorage.setItem("toDoItems", JSON.stringify(items));
    }

    function loadItems() {
        const items = JSON.parse(localStorage.getItem("toDoItems"));

        if (items) {
            items.forEach((item) => {
                const newItem = createListItem(item);
                itemList.appendChild(newItem);
            });
        }
    }

    loadItems();
});
