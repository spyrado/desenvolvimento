export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  sendEmail(email: string, message: string) {}
  save(user: User) {}
}