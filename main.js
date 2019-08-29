const pets = [    
    {
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVy7iQZVL0EDibpsZGC8aH7-CnV-SskOcWUTO2dIhEtk7dkRHX_w'
    Name: 'Spyro'
    Color: Purple
    Special Skill: 'Head Bash, Fire Breath, Cute Personality'
    Type of Pet: 'Dragon'
    },
    {
    Image: 'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/05/garfield.jpg?itok=Qy7GbIi6'
    Name: 'Garfield'
    Color: 'Orange Tabby'
    Special Skill: 'Sleeping, Eating Lasagna'
    Type of Pet: 'Cat'
    },
    {
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEC_ACS-G5VOMi-982u0IwdqElyPwNH-ODmBlyMl5bupGC5U6yA'
    Name: 'Brian Griffin'
    Color: 'White'
    Special Skill: 'Walk Bipedally, Speak Intelligently, Driving Cars'
    Type of Pet: 'Dog'
    },
    {
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3KbftRIK61b98NCG4N7yKRggh59khiUb5gB8abFWSbEvrJLA'
    Name: 'Elliot'
    Color: 'Green'
    Special Skill: 'Invisibility, Flying'
    Type of Pet: 'Dragon'
    },
    {
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_n6p5j2GBXFwkg-QaAS8cg_BXRRFnOGCGViBJAJYuvk0csZnX'
    Name: 'Scooby'
    Color: 'Brown'
    Special Skill: 'Eating, Getting into Trouble, Solving Mysteries'
    Type of Pet: 'Dog'
    },
    {
    Image: 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2014/06/how_to_train_a_l.jpg'
    Name: 'Toothless'
    Color: 'Black'
    Special Skill: 'Flying with half a tail, Super Fire Breath'
    Type of Pet: 'Dragon'
    },
]

const printToDom = (divId, toPrint) => {
    document.getElementById('divId').innerHTML += toPrint;
};

const petPrinter = (petArr) => {
    for (let i = 0; i < pets.length; i++) {
    const pet = petArr[i];    
    const printPet = ''
    }
}