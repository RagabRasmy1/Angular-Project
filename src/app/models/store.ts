export class Store {
  name: string;
  branches: string[];
  logo: string;
  constructor(name: string, branchs: string[], logo: string) {
    this.name = name;
    this.branches = branchs;
    this.logo = logo;
  }
}
