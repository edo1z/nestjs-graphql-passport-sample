import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { SignInInput } from './dto/sign-in.input';
import { SignInPayload } from './dto/sign-in.payload';
import { Profile } from './dto/profile.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => SignInPayload, { name: 'signIn' })
  async signIn(@Args('input') _: SignInInput, @Context() context) {
    return this.authService.login(context.req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Profile, { name: 'profile' })
  async getProfile(@Context() ctx: any) {
    console.log(ctx.req.user);
    return ctx.req.user;
  }
}
