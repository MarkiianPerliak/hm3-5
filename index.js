const taskPrompt1 = prompt("Що ви замовляєте: Кава, Чай чи Сік");

switch (taskPrompt1) {
    case "Кава":
        alert("Ви замовили каву")
        break

    case "Чай":
        alert("Ви замовили каву")
        break

    case "Сік":
        alert("Ви замовили каву")
        break

    default:
        alert("Ви нічого не замовили")
}


const taskPrompt2 = prompt("Введіть день тижня");

switch (taskPrompt2) {
    case "Понеділок":
        alert("Ви ввели день тижня")
        break

    case "Вівторок":
        alert("Ви ввели день тижня")
        break

    case "Середа":
        alert("Ви ввели день тижня")
        break

    case "Четвер":
        alert("Ви ввели день тижня")
        break

    case "П'ятниця":
        alert("Ви ввели день тижня")
        break

    case "Субота":
        alert("Ви ввели день тижня")
        break

    case "Неділя":
        alert("Ви ввели день тижня")
        break

    default:
        alert("Ви не ввели день тижня")
}


const taskPrompt3 = prompt("Введіть місяць")

switch (taskPrompt3) {
    case "січень":
        alert("Ви ввели місяць Зими")
        break

    case "лютий":
        alert("Ви ввели місяць Зими")
        break

    case "березень":
        alert("Ви ввели місяць Весни")
        break

    case "квітень":
        alert("Ви ввели місяць Весни")
        break

    case "травень":
        alert("Ви ввели місяць Весни")
        break

    case "червень":
        alert("Ви ввели місяць Літа")
        break

    case "липень":
        alert("Ви ввели місяць Літа")
        break

    case "серпень":
        alert("Ви ввели місяць Літа")
        break

    case "вересень":
        alert("Ви ввели місяць Осені")
        break

    case "жовтень":
        alert("Ви ввели місяць Осені")
        break

    case "листопад":
        alert("Ви ввели місяць Осені")
        break

    case "грудень":
        alert("Ви ввели місяць Зими")
        break

    default:
        alert("Ви не ввели місяць")
}


const taskPrompt4 = prompt("Введіть місяць")

switch (taskPrompt4) {
    case "січень":
        alert("Цей місяць має 31 днів")
        break

    case "лютий":
        alert("Цей місяць має 29 днів")
        break

    case "березень":
        alert("Цей місяць має 31 днів")
        break

    case "квітень":
        alert("Цей місяць має 30 днів")
        break

    case "травень":
        alert("Цей місяць має 31 днів")
        break

    case "червень":
        alert("Цей місяць має 30 днів")
        break

    case "липень":
        alert("Цей місяць має 31 днів")
        break

    case "серпень":
        alert("Цей місяць має 31 днів")
        break

    case "вересень":
        alert("Цей місяць має 30 днів")
        break

    case "жовтень":
        alert("Цей місяць має 31 днів")
        break

    case "листопад":
        alert("Цей місяць має 30 днів")
        break

    case "грудень":
        alert("Цей місяць має 31 днів")
        break

    default:
        alert("Ви не ввели місяць")
}


const taskPrompt5 = prompt("Введіть колір світлофора");


switch (taskPrompt5) {
    case "Червоний":
        alert("стоп")
        break

    case "Зелений":
        alert("йти")
        break

    case "Жовтий":
        alert("чекати")
        break

    default:
        alert("Ви не ввили колір світлофора")
}


const taskPrompt6 = prompt("Введіть число");

const taskPrompt6Number = Number(taskPrompt6);

const taskPrompt6Symbol = prompt("Виберіть тв введіть символ: +, -, *, / ");

const number = 25;

switch (taskPrompt6Symbol) {
    case "+":
        const answear = number + taskPrompt6Number;
        alert(`Відповідь: ${answear}`)
        break

    case "-":
        const answear1 = number - taskPrompt6Number;
        alert(`Відповідь: ${answear1}`)
        break

    case "*":
        const answear2 = number * taskPrompt6Number;
        alert(`Відповідь: ${answear2}`)
        break

    case "/":
        const answear3 = number / taskPrompt6Number;
        alert(`Відповідь: ${answear3}`)
        break

    default:
        alert("Ви не ввели відповідний символ")
}