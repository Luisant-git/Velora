import { IsString, IsOptional } from 'class-validator';

export class UpdateProductImageDto {
  @IsString()
  @IsOptional()
  imageUrl?: string;
}

export class ProductImageResponseDto {
  message: string;
  filename: string;
  url: string;
}