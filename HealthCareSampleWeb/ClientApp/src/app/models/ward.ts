import { Doctor } from "./doctor";

export class Ward {
  id: number;
  description: string;
  doctors: Doctor[] = [];
}
