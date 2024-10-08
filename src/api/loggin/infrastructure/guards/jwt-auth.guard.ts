import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  constructor(
    private reflector: Reflector,
    private logger: Logger
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    try {
      const canActivate = await super.canActivate(context);

      return canActivate as boolean;
    } catch (error) {
      this.logger.error(`Error en la validación del JWT: ${error.message}`);
      this.logger.debug('Stack de error:', error.stack);
      throw new UnauthorizedException('Token inválido o expirado');
    }


  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException('No se pudo autenticar');
    }
    return user;
  }
}
