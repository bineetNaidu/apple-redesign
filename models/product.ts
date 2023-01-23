import { ObjectId } from 'mongodb';
import {
  getModelForClass,
  prop as Property,
  type Ref,
} from '@typegoose/typegoose';
import { Category } from './category';

export class Product {
  readonly _id!: ObjectId;

  @Property({ required: true })
  title!: string;

  @Property({ required: true })
  image_url!: string;

  @Property({ required: true })
  slug!: string;

  @Property({ required: true })
  description!: string;

  @Property({ required: true })
  price!: string;

  @Property({ ref: () => Category })
  category!: Ref<Category>;
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
});
