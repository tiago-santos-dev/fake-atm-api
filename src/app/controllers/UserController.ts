import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Adress from '../models/Adress';
import Person from '../models/Person';
import User from '../models/User';

class UserController {
  async store(req: Request, res: Response) {
    const { name, cpf, adress: inputAdress, email, password } = req.body;
    const userRepository = getRepository(User);
    const personRepository = getRepository(Person);
    const adressRepository = getRepository(Adress);

    const userExists = await userRepository.findOne({ where: { email } });

    if (userExists) {
      return res.sendStatus(409);
    }

    const adress = adressRepository.create(inputAdress);
    await adressRepository.save(adress);

    const person = personRepository.create({
      name,
      cpf,
      birth_date: new Date(),
      adress,
    });
    await personRepository.save(person);

    const user = userRepository.create({
      email,
      password,
      person_info: person,
      roles: [],
    });
    await userRepository.save(user);

    return user;
  }
}

export default new UserController();
