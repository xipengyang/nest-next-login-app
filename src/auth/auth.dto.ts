export interface LoginDTO {
  username: string;
  password: string;
}

export interface UserDTO extends LoginDTO {
  seller?: boolean;
}
