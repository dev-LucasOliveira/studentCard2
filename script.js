let image = document.getElementById('image');

let nameHTML = document.getElementById('name');

let role = document.getElementById('role');

let birthDate = document.getElementById('birth-date');

let statusHTML = document.getElementById('status');

let mode = document.getElementById('mode');

let arrayName = [
    "Pedro Luna", 
    "Lucas Oliveira", 
    "Marcus Silva",  
    "Levi Rangel", 
    "Marlos Gonçalves",
    "Nilo Reis",
    "Igor Santos",
    "Esther Corsino"
];

let arrayRole = [
    "Teacher",
    "Monitor",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student"
];

let arrayBirthDate = [
    "1986-04-02",
    "2001-01-14",
    "1988-03-16",
    "2003-10-29",
    "1988-07-22",
    "2004-04-12",
    "1979-08-30",
    "2000-11-14"
];

let arrayStatus = [
    "Active",
    "Active",
    "Active",
    "Active",
    "Active",
    "Active",
    "Active",
    "Active"
];

let arrayMode = [
    "Onsite",
    "Onsite",
    "Online",
    "Onsite",
    "Onsite",
    "Onsite",
    "Onsite",
    "Onsite"
];

let arrayImage = [
    "https://i.im.ge/2022/08/02/FAH1Sa.2019-01-Pedro.jpg",
    "https://i.im.ge/2022/08/11/F4ISFM.IMG-20220721-125619-334.jpg",
    "https://i.im.ge/2022/08/15/OrLHI9.Screenshot-20220802-141025-2.png",
    "https://i.im.ge/2022/08/11/F4hVzG.FctU2T-20220619-185415.jpg",
    "https://i.im.ge/2022/08/15/OrLjDP.OQPoT0-DSC-0368.jpg",
    "https://i.im.ge/2022/08/07/F8JCe9.IMG-20220415-193417-403.jpg",
    "https://i.im.ge/2022/08/19/ODquNc.OFWueW-WhatsApp-Image-2022-08-15-at-11-58-43.jpg",
    "https://i.im.ge/2022/08/20/ODay0P.WhatsApp-Image-2022-08-19-at-16-22-38.jpg"
];


function showCard(btnNumber) {

    
    if (btnNumber === 1) {
        image.src = arrayImage[0];
        nameHTML.innerHTML = arrayName[0];
        role.innerHTML = arrayRole[0];
        birthDate.innerHTML = arrayBirthDate[0];
        statusHTML.innerHTML = arrayStatus[0];
        mode.innerHTML = arrayMode[0];
    }

    if (btnNumber === 2) {
        image.src = arrayImage[1];
        nameHTML.innerHTML = arrayName[1];
        role.innerHTML = arrayRole[1];
        birthDate.innerHTML = arrayBirthDate[1];
        statusHTML.innerHTML = arrayStatus[1];
        mode.innerHTML = arrayMode[1];
    }
    
    if (btnNumber === 3) {
        image.src = arrayImage[2];
        nameHTML.innerHTML = arrayName[2];
        role.innerHTML = arrayRole[2];
        birthDate.innerHTML = arrayBirthDate[2];
        statusHTML.innerHTML = arrayStatus[2];
        mode.innerHTML = arrayMode[2];
    }
    
    if (btnNumber === 4) {
        image.src = arrayImage[3];
        nameHTML.innerHTML = arrayName[3];
        role.innerHTML = arrayRole[3];
        birthDate.innerHTML = arrayBirthDate[3];
        statusHTML.innerHTML = arrayStatus[3];
        mode.innerHTML = arrayMode[3];
    }
    
    if (btnNumber === 5) {
        image.src = arrayImage[4];
        nameHTML.innerHTML = arrayName[4];
        role.innerHTML = arrayRole[4];
        birthDate.innerHTML = arrayBirthDate[4];
        statusHTML.innerHTML = arrayStatus[4];
        mode.innerHTML = arrayMode[4];
    }
    
    if (btnNumber === 6) {
        image.src = arrayImage[5];
        nameHTML.innerHTML = arrayName[5];
        role.innerHTML = arrayRole[5];
        birthDate.innerHTML = arrayBirthDate[5];
        statusHTML.innerHTML = arrayStatus[5];
        mode.innerHTML = arrayMode[5];
    }
    
    if (btnNumber === 7) {
        image.src = arrayImage[6];
        nameHTML.innerHTML = arrayName[6];
        role.innerHTML = arrayRole[6];
        birthDate.innerHTML = arrayBirthDate[6];
        statusHTML.innerHTML = arrayStatus[6];
        mode.innerHTML = arrayMode[6];
    }
    
    if (btnNumber === 8) {
        image.src = arrayImage[7];
        nameHTML.innerHTML = arrayName[7];
        role.innerHTML = arrayRole[7];
        birthDate.innerHTML = arrayBirthDate[7];
        statusHTML.innerHTML = arrayStatus[7];
        mode.innerHTML = arrayMode[7];
    }
};