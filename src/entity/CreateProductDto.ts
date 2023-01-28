import { IsInt, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateProductDto {

    @IsString()
    @Field(() => String)
    name!: string;

    @IsInt()
    @Field(()=> Int)
    quantity!: number;
  }
  