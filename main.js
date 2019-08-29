const pets = [    
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVy7iQZVL0EDibpsZGC8aH7-CnV-SskOcWUTO2dIhEtk7dkRHX_w',
    name: 'Spyro',
    color: 'Purple',
    specialSkill: 'Head Bash, Fire Breath, Cute Personality',
    typeOfPet: 'Dragon'
    },
    {
    image: 'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/05/garfield.jpg?itok=Qy7GbIi6',
    name: 'Garfield',
    color: 'Orange Tabby',
    specialSkill: 'Sleeping, Eating Lasagna',
    typeOfPet: 'Cat'
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEC_ACS-G5VOMi-982u0IwdqElyPwNH-ODmBlyMl5bupGC5U6yA',
    name: 'Brian Griffin',
    color: 'White',
    specialSkill: 'Walk Bipedally, Speak Intelligently, Driving Cars',
    typeOfPet: 'Dog'
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3KbftRIK61b98NCG4N7yKRggh59khiUb5gB8abFWSbEvrJLA',
    name: 'Elliot',
    color: 'Green',
    specialSkill: 'Invisibility, Flying',
    typeOfPet: 'Dragon'
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_n6p5j2GBXFwkg-QaAS8cg_BXRRFnOGCGViBJAJYuvk0csZnX',
    name: 'Scooby',
    color: 'Brown',
    specialSkill: 'Eating, Getting into Trouble, Solving Mysteries',
    typeOfPet: 'Dog'
    },
    {
    image: 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2014/06/how_to_train_a_l.jpg',
    name: 'Toothless',
    color: 'Black',
    specialSkill: 'Flying with half a tail, Fire Breath',
    typeOfPet: 'Dragon'
    },
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const petPrinter = (petArr) => {
    let petsToPrint = '';
    for (let i = 0; i < pets.length; i++) {
        const pet = petArr[i];
        petsToPrint +=
        `
        <div class="pet-cards">
            <h2>${pet.name}</h2>
            <img src=${pet.image}>
            <p>${pet.color}</p>
            <p>${pet.specialSkill}</p>
            <h3>${pet.typeOfPet}</h3>
        </div>
        `
    }
    printToDom(petsToPrint, 'pet-container');
}

petPrinter(pets);