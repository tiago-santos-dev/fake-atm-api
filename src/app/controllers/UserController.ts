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

    try {
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

      const { id, person_info, roles } = user;

      return res.status(201).json({
        id,
        email,
        person_info,
        roles,
      });
    } catch (error) {
      return res.sendStatus(502);
    }
  }
}

export default new UserController();
