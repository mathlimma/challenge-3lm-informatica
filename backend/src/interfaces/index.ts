export interface IEmployee {
  image: string;
  name?: string;
  secondName?: string;
  role?: IRole;
  birth?: string;
  salary?: boolean;
}

export interface IRole {
  description?: string;
}
