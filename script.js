// КНОПКА ВВЕРХ

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ЧАСЫ

const clock = document.createElement("div");

clock.className = "clock";

document.body.appendChild(clock);

function updateClock() {

    const now = new Date();

    const hours =
    String(now.getHours()).padStart(2, "0");

    const minutes =
    String(now.getMinutes()).padStart(2, "0");

    const seconds =
    String(now.getSeconds()).padStart(2, "0");

    clock.textContent =
    `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock, 1000);

updateClock();


// ПОЛНОЕ РАСПИСАНИЕ

const schedules = {

    "Смирнова Анна Викторовна": {

        direction: "Живопись",

        "Младшая группа":
        "Понедельник — 10:00",

        "Средняя группа":
        "Среда — 13:00",

        "Старшая группа":
        "Пятница — 16:00",

        "Взрослая группа":
        "Суббота — 18:00"

    },

    "Петров Дмитрий Игоревич": {

        direction: "Музыка",

        "Младшая группа":
        "Вторник — 09:00",

        "Средняя группа":
        "Четверг — 12:00",

        "Старшая группа":
        "Пятница — 15:00",

        "Взрослая группа":
        "Воскресенье — 19:00"

    },

    "Волкова Мария Сергеевна": {

        direction: "Музыка",

        "Младшая группа":
        "Понедельник — 11:00",

        "Средняя группа":
        "Среда — 14:00",

        "Старшая группа":
        "Пятница — 17:00",

        "Взрослая группа":
        "Суббота — 20:00"

    },

    "Романова Елена Андреевна": {

        direction: "Живопись",

        "Младшая группа":
        "Вторник — 10:00",

        "Средняя группа":
        "Четверг — 13:00",

        "Старшая группа":
        "Пятница — 18:00",

        "Взрослая группа":
        "Воскресенье — 21:00"

    },

    "Соколов Артём Николаевич": {

        direction: "Музыка",

        "Младшая группа":
        "Понедельник — 12:00",

        "Средняя группа":
        "Среда — 15:00",

        "Старшая группа":
        "Пятница — 19:00",

        "Взрослая группа":
        "Суббота — 22:00"

    },

    "Лебедева Ирина Павловна": {

        direction: "Живопись",

        "Младшая группа":
        "Вторник — 11:00",

        "Средняя группа":
        "Четверг — 14:00",

        "Старшая группа":
        "Пятница — 20:00",

        "Взрослая группа":
        "Воскресенье — 17:00"

    }

};


// КНОПКА ПОКАЗА РАСПИСАНИЯ

const scheduleBtn =
document.getElementById("showScheduleBtn");

scheduleBtn.addEventListener("click", () => {

    const teacher =
    document.getElementById("teacherSelect").value;

    const direction =
    document.getElementById("directionSelect").value;

    const group =
    document.getElementById("groupSelect").value;

    const result =
    document.getElementById("scheduleResult");


    if (
        schedules[teacher].direction !== direction
    ) {

        result.innerHTML = `

            <p>

                Этот преподаватель
                не ведёт направление
                "${direction}"

            </p>

        `;

        return;

    }


    result.innerHTML = `

        <h3>
            ${teacher}
        </h3>

        <p>
            Направление:
            ${direction}
        </p>

        <p>
            Группа:
            ${group}
        </p>

        <p>
            Время занятия:
            ${schedules[teacher][group]}
        </p>

    `;

});


// ФОРМА ЗАПИСИ

const form =
document.getElementById("signupForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Заявка успешно отправлена!");

    form.reset();

});

