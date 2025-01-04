import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('LocalizedNameInput')
@ObjectType('LocalizedName')
export class LocalizedNameType {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;
}

@InputType('NationalIdInput')
@ObjectType('NationalId')
export class NationalIdType {
  @Field({ nullable: true })
  idNumber?: string;

  @Field({ nullable: true })
  expiryDate?: string;
}

@InputType('CountryInput')
@ObjectType('Country')
class CountryType {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@InputType('NationalityInput')
@ObjectType('Nationality')
export class NationalityType {
  @Field(() => CountryType, { nullable: true })
  country?: CountryType;

  @Field(() => Int, { nullable: true })
  countryId?: number;
}

@InputType('MaritalStatusInput')
@ObjectType('MaritalStatus')
export class MaritalStatusType {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@ObjectType()
export class UserType {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedNameType)
  localizedName: LocalizedNameType;

  @Field(() => NationalIdType)
  nationalId: NationalIdType;

  @Field(() => [NationalityType])
  nationalities: NationalityType[];

  @Field(() => MaritalStatusType)
  maritalStatus: MaritalStatusType;

  @Field(() => Int)
  dependants: number;
}
