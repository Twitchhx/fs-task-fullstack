import { InputType, Field } from '@nestjs/graphql';
import {
  LocalizedNameType,
  MaritalStatusType,
  NationalIdType,
  NationalityType,
} from '../user.types';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;

  @Field(() => LocalizedNameType, { nullable: true })
  localizedName?: LocalizedNameType;

  @Field(() => NationalIdType, { nullable: true })
  nationalId?: NationalIdType;

  @Field(() => [NationalityType], { nullable: true })
  nationalities?: NationalityType[];

  @Field(() => MaritalStatusType, { nullable: true })
  maritalStatus?: MaritalStatusType;

  @Field({ nullable: true })
  dependants?: number;
}
