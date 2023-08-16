const findTheOldest = function(data) {
    const person = data.reduce((person_a, person_b) => {
        const current_year = new Date().getFullYear();

        const person_a_age = person_a.yearOfDeath
            ? person_a.yearOfDeath - person_a.yearOfBirth
            : current_year - person_a.yearOfBirth;

        const person_b_age = person_b.yearOfDeath 
            ? person_b.yearOfDeath - person_b.yearOfBirth
            : current_year - person_b.yearOfBirth;

        return person_a_age < person_b_age ? person_b: person_a;
        });
    return person
};

// Do not edit below this line
module.exports = findTheOldest;
