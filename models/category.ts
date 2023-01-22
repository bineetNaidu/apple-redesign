import { ObjectId } from 'mongodb';
import { getModelForClass, prop as Property } from '@typegoose/typegoose';

export class Category {
  readonly _id!: ObjectId;

  @Property({ required: true })
  title!: string;

  @Property({ required: true })
  slug!: string;
}

export const CategoryModel = getModelForClass(Category, {
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
});
