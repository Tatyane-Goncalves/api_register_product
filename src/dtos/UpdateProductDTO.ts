import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length } from 'class-validator';
import { ProductTypeEnum  } from '../enums/ProductTypeEnum';

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  @Length(3, 100)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  description?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsEnum(ProductTypeEnum)
  type?: ProductTypeEnum;
}
