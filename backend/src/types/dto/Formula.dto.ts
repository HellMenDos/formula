import { IsNotEmpty, IsString } from 'class-validator';

export class FormulaDTO {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public describe: string;

  @IsString()
  @IsNotEmpty()
  public photo: string;

  @IsString()
  @IsNotEmpty()
  public excelText: string;
}

export type FormulaUpdateDTO = Partial<FormulaDTO>
