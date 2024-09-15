let FetchTranslate = await fetch("Data/Translate.json");
let Translate = await FetchTranslate.json();

let Lang = localStorage.getItem("lang");

let user_achievements = 0;
let all_achievements = 2;

for (let i = 0;i != all_achievements;i++)
{
    let container = document.createElement('div');
    let achievement_name = document.createElement('text');
    achievement_name.textContent = Translate[Lang].achievement.achievements_names[i];
    container.append(achievement_name);
    let b = document.querySelector('body');
    b.append(container);
    console.log("a");
}

