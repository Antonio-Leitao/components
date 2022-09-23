import { faker } from '@faker-js/faker';


export function randomUser(){
  return {
    userId: faker.datatype.uuid(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    jobtitle: faker.name.jobTitle(),
  };
}
