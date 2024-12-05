import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty({ message: 'Product ID is required' })
  @IsNumber({}, { message: 'Product ID must be a number' })
  productId: number;

  @IsNotEmpty({ message: 'Rating is required' })
  @IsNumber({}, { message: 'Rating must be a number' })
  ratings: number;
  @IsNotEmpty({ message: 'Comment is required' })
  comment: string;
}
