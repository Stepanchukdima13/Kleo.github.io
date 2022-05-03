const registrationImage = document.getElementById('image-form'),
    labelCourseName = document.getElementById('lable-course-name'),
    labelDescriptionOfCourses = document.getElementById('description-of-courses'),
    labelDurationOfLesson = document.getElementById('duration-of-lesson'),
    labelNumberOfLessons = document.getElementById('num-of-lessons'),
    labelPrice = document.getElementById('price');

const selects = document.querySelectorAll('select');
const options = document.querySelectorAll('option');


console.log(options)
selects[1].addEventListener('change', function () {
    //Edit img
    switch (true) {
        case this.value === 'pyIT Bootcamp' :
            registrationImage.src = "./Assets/python.png";
            labelCourseName.textContent = options[2].textContent;
            labelDescriptionOfCourses.textContent
                = "На Python створюють веб-додатки та нейромережі, проводять наукові обчислення та автоматизують процеси. Ви навчитеся програмувати затребуваною мовою з нуля, напишете Telegram-бота для турагентства та зможете почати кар'єру в розробці."
            labelDurationOfLesson.textContent = "14 ГОДИН"
            labelNumberOfLessons.textContent = "7 ЗАНЯТЬ"
            labelPrice.textContent = "349$"
            break;
        case this.value === 'jsIT Bootcamp' :
            registrationImage.src = "./Assets/js.png";
            labelCourseName.textContent = options[3].textContent;
            labelDescriptionOfCourses.textContent
                = "JSIT Bootcamp дасть вам не лише основні навички, необхідні для роботи. Ми готуємо вас до повноцінного входу до професії IT-фахівця. За 33 тижні навчання ви освоїте потрібні професійні навички, навчитеся спілкуванню з колегами та замовниками, підвищите особисту ефективність та освоїте всі навички."
            labelDurationOfLesson.textContent = "100 ГОДИН"
            labelNumberOfLessons.textContent = "50 ЗАНЯТЬ"
            labelPrice.textContent = "1349$"
            break;
        case this.value === 'Fullstack course' :
            registrationImage.src = "./Assets/fullstack.png";
            labelCourseName.textContent = options[4].textContent;
            labelDescriptionOfCourses.textContent
                = "Ви з нуля навчитеся розробляти повноцінні сайти та веб-додатки на JS і вивчите один із фреймворків — Vue, React або Angular. Станете цінним співробітником для будь-якої IT-компанії, зрозумієте, як отримати підвищення, і зможете заробити більше."
            labelDurationOfLesson.textContent = "54 ГОДИНИ"
            labelNumberOfLessons.textContent = "27 ЗАНЯТЬ"
            labelPrice.textContent = "615$"
            break
        case this.value === 'Nodejs course' :
            registrationImage.src = "./Assets/node js.png";
            labelCourseName.textContent = options[5].textContent;
            labelDescriptionOfCourses.textContent
                = "На цьому курсі ви навчитеся робити справжні проекти, такі ж по рівнях складності, як і в індустрії. І будете робити їх правильно, щоб після навчання показувати результат високого рівня, за який компанії готові платити."
            labelDurationOfLesson.textContent = "40 ГОДИН"
            labelNumberOfLessons.textContent = "20 ЗАНЯТЬ"
            labelPrice.textContent = "450$"
    }


})

// modal Window script
const modalWrapper = document.getElementById('modalWrapper'),
    modalContent = document.getElementById('modalContent'),
    form = document.getElementById('form'),
    modalBtnClose = document.getElementById('modalCloseButton');



form.addEventListener("submit", e => {
    e.preventDefault()
    modalContent.classList.add("active")
    modalWrapper.classList.add("active")
})

modalBtnClose.addEventListener("click", e => {

    if (!e.target.classList.contains('modal-content-wrapper')) {
        //e.stopPropagation()

        modalContent.classList.remove("active")
        modalWrapper.classList.remove("active")
    }
})

modalWrapper.addEventListener("click", e => {

    if (!e.target.classList.contains('modal-content-wrapper')) {
        //e.stopPropagation()

        modalContent.classList.remove("active")
        modalWrapper.classList.remove("active")
    }
})

 modalContent.addEventListener("click", e=>{
     e.stopPropagation()
})