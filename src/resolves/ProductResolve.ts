import { GraphQLError } from "graphql";
import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { appDataSource } from "../config/typeorm";
import { Product } from "../entity/Product";
import { CreateProductDto } from "../entity/CreateProductDto";
import { UpdateProductDto } from "../entity/UpdateProductDto";




@Resolver()
export class ProductResolver {


    @Mutation(() => Product)
    async createProduct(
        @Arg("body", () => CreateProductDto) body: CreateProductDto
    ) {
        const product = appDataSource.getRepository(Product).create(body);
        return await appDataSource.getRepository(Product).save(product);
    }

    @Mutation(() => Product)
    async updateProduct(
        @Arg("id", () => Int) id: number,
        @Arg("body", () => UpdateProductDto) body: UpdateProductDto
    ) {
        const product = await appDataSource.getRepository(Product).preload(
            {
                id: id,
                name: body.name,
                quantity: body.quantity
            }
        );
        if (!product) { throw new GraphQLError('Product to update not found') }
        return await appDataSource.getRepository(Product).save(product);
    }

    @Mutation(() => Product)
    async deleteProduct(
        @Arg("id", () => Int) id: number
    ) {
        const product = appDataSource.getRepository(Product).findOneOrFail({ where: { id } }).catch(() => {
            throw new GraphQLError('Product to delete not found')
        });
        await appDataSource.getRepository(Product).delete(id);
        return product;
    }


    @Query(() => [Product])
    async getAllProducts(): Promise<Product[]> {
        return await appDataSource.getRepository(Product).find();
    }

    @Query(() => Product)
    async getProduct(@Arg("id", () => Int) id: number): Promise<Product> {
        return await appDataSource.getRepository(Product).findOneOrFail({ where: { id } }).catch(() => {
            throw new GraphQLError('Product not found')
        });
    }
}