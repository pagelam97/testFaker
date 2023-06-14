
const { faker } = require("@faker-js/faker")

module.exports = () => {

    const getListitem = (num) => {
        let randomList = []
        for (let i = 0; i < num; i++) {
            let item = {
                id: faker.datatype.uuid(),
                name: faker.person.firstName(),
                phone: faker.phone.number('13#-###-###'),
                gender: faker.person.sexType(),
                img: faker.image.url({
                    height: 150,
                    width: 150
                },

                ),
                avatar: faker.internet.avatar(),
                email: faker.internet.email(),
                age: faker.number.int({ min: 5, max: 99 }),
                birthday: Date(faker.date.birthdate({ min: 5, max: 65, mode: 'age' }))
            }
            randomList.push(item)
        }
        return randomList
    }
    return {
        list: getListitem(1000),
        list1: getListitem(50),
        list2: getListitem(50),
        list3: getListitem(50),
        list4: getListitem(50),
        list5: getListitem(50),
        list6: getListitem(50),
        list7: getListitem(50),
        list8: getListitem(50),
        list9: getListitem(50),
        list10: getListitem(50),
        list11: getListitem(50),
    }
}