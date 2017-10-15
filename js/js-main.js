'use strict';

(function () {
    let tab = document.getElementById('tab');

    tab.addEventListener('click', function (e) {

        let target = e.target;
        while (target != this) {
            if (target.classList.contains('tab__link')) {
                showtab(target, e)
                return
            }
            target = target.parentNode;
        }
    })

    function showtab(link, e) {
        e.preventDefault()

        let tabId = link.getAttribute('data-tab'),
            links = tab.querySelectorAll('.tab__link'),
            blocks = tab.querySelectorAll('.tab__content'),
            selector = tabId + '',
            activeTab = document.getElementById(selector);

        /*удаляю активный класс с сылок и вешаю на нужную*/
        for (let i = 0; i <= links.length - 1; i++) {
            links[i].classList.remove('tab__active-link')
        }

        for (let i = 0; i <= blocks.length - 1; i++) {
            blocks[i].classList.remove('tab__active-content')
        }

        /*Здесь добавляю включаю нужный таб*/
        link.classList.add('tab__active-link')
        activeTab.classList.add('tab__active-content')
    }
})()

let interNational = {
    russian: {
        name: `Ирина Андрианова`,
        range: `UX/UI дизайнер`,
        aboutTitle: `Немного обо мне`,
        aboutText: `Принято считать, что дизайнер и разработчик это две разные специальности. На самом деле, хороший специалист по юзабилити всегда немного программист, аналитик, вообще много думающий и изучающий человек. В этом и скрыта главная прелесть работы UX-дизайнера — постоянный рост и стремление к лучшим результатам. В данный момент меня интересуют масштабные проекты, предоставляющие такую возможность.`,
        aboutText2: `Вы можете связаться со мной по любым вопросам  относительно `,
        aboutText3: `моего резюме`,
        aboutText4: `Перейдем к работам.`,
        workTitle: `Портфолио`,
        workDesign: `Дизайн`,
        workPrototype: `Прототипирование`,
        workCoding: `HTML-верстка`,
        workNewsletter: `Email-рассылки`,
        skillsTitle: `Навыки`,
			  landingProject: `Учебный проект Business Landing`,
			  landingDesc: `Стек используемых технологий: Gulp 4.0, Sass, native JS. Адаптивная верстка, CSS-спрайты, методология BEM.`,
        gameSite: `Макет игрового сайта`,
        gameDesc: `Думаю, все согласятся, что частая проблема пользователей - попытка найти нужный раздел и не заблудиться в дебрях сайта. Поэтому продуманная навигация очень важна. Также, как и необходимость учитывать характер аудитории. Вот геймеры, например, любят темные тона и бывают весьма экспрессивны :)`,
        floristPrototype: `Важный момент в работе - этап прототипирования`,
        floristDesc: `Лучший способ не вносить много правок в проект - предусмотреть их, используя прототип.`,
        hobbies: `Увлечения`,
        hobbiesText: `Экстремальные виды спорта: прыжки с парашютом, полеты на параплане, верховая езда, путешествия автостопом;`,
        hobbiesBesides: `Кроме того: вышивка крестиком, рисование и фото на полароид.`
    },
    english: {
        name: `Irina Andrianova`,
        range: `UX/UI designer`,
        aboutTitle: `Let me introduce myself`,
        aboutText: `It is accepted that a designer and a web developer are two different specialties. To be honest, I have a different point of view. A good UX-specialist should know the basics of programming, should be able to analyze, must constantly develop and learn something new. I think that it is very inspiring to work! Now I would like to work in a long-term project with interesting new tasks. I hope that my skills can be interesting for your company.`,
        aboutText2: `Please, contact me for any information relevant to `,
        aboutText3: `my resume`,
        aboutText4: `let's move on my works.`,
        workTitle: `My works`,
        workDesign: `Design`,
        workPrototype: `Prototype`,
        workCoding: `Html coding`,
        workNewsletter: `Email newsletter`,
        skillsTitle: `Skills`,
			  landingProject: `Training project Business Landing`,
			  landingDesc: `Stack: Gulp 4.0, Sass, native JS. Adaptive layout, CSS-sprite, BEM methodology.`,
        gameSite: `Games website layout`,
        gameDesc: `Correct me if I'm wrong, but "I'm lost" is a frequent phrase from site users. Convenient navigation is very important, as well as the characteristics of users. For example, gamers like dark colors and often are expressive. Such are they, gamers :)`,
        floristPrototype: `Prototyping is a very important process in the work of a UX-designer`,
        floristDesc: `The best way is not to make a lot of edits of the project but to settle all the issues at the prototype stage.`,
        hobbies: `Hobbies`,
        hobbiesText: `Extreme activities: paragliding, horseback riding, skydiving, travels and hitch-hiking;`,
        hobbiesBesides: `And besides: painting, cross stitching and polaroid photos.`
    },

    link: document.getElementById('interlink'),

    changeLang(lang) {
        for (let key in lang) {
            let selector = key+'',//`[data-id="${key}"`
                item = document.getElementById(selector);
            item.innerText = lang[key]
        }
    },
/**/

    init() {
        let self = this;

        this.link.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.classList.contains('englishActive_js')) {
                this.innerText = 'EN';
                self.link.classList.remove('englishActive_js');
                self.changeLang(self.russian)
            } else {
                this.innerText = 'RU';
                self.link.classList.add('englishActive_js');
                self.changeLang(self.english)
            }
        })
    }
}

interNational.init()

