import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length } from "class-validator"
import { ProductTypeEnum } from "../enums/ProductTypeEnum"

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  name!: string;
  
  @IsOptional()
  @IsString()
  @Length(0, 255)
  description?: string;


  @IsNumber()
  @IsPositive()
  price!: number

  @IsEnum(ProductTypeEnum)
  type!: ProductTypeEnum
}