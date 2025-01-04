import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.types';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => UserType)
  async user(@Args('userId', { type: () => Int }) userId: number) {
    return this.userService.findUserById(userId);
  }
  @Mutation(() => UserType)
  async updateUser(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('updateInput') updateInput: UpdateUserInput,
  ) {
    return this.userService.updateUser(userId, updateInput);
  }
}
