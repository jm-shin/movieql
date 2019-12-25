const people = [
    {
        id: "0",
        name: "jongmin",
        age: 29,
        gender: "male",
    },
    {
        id:"1",
        name: "jaewon",
        age: 30,
        gender: "male"
    },
    {
        id:"2",
        name: "daechul",
        age: 27,
        gender: "male"
    },
    {
        id:"3",
        name: "taegun",
        age: 30,
        gender: "male"
    },
    {
        id:"4",
        name: "heyji",
        age: 26,
        gender: "female"
    },
    {
        id:"5",
        name: "eunduck",
        age: 32,
        gender: "female"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}