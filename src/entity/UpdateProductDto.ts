import { IsInt, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UpdateProductDto {

    @IsString()
    @Field(() => String, {nullable: true})
    name?: string;

    @IsInt()
    @Field(()=> Int, { nullable: true})
    quantity?: number;
  }
  