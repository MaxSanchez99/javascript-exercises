const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        let first = 0;
        let second = 0;

        if (!('yearOfDeath' in oldest)) {
            first = currentYear - oldest.yearOfBirth;
        }
        else {
            first = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (!('yearOfDeath' in person)) {
            second = currentYear - person.yearOfBirth;
        }
        else {
            second = person.yearOfDeath - person.yearOfBirth;
        }

        if (first > second) {
            return oldest;
        }
        else {
            return person;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
