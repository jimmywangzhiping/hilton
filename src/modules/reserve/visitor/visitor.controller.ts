import { Controller, Body, Post, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { CreateVisitorDTO, LoginDTO } from '../dto/visitor.dto';
import { VisitorService } from './visitor.service';
import { ApiTransformInterceptor } from '../../../common/interceptors/api-transform.interceptor';
import { VisitorRole } from '../schemas/types';


@Controller('visitor')
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Post('register')
  @UseInterceptors(ApiTransformInterceptor)
  @ApiOperation({ summary: '游客注册' })
  @ApiOkResponse({ description: '注册成功' })
  async register(@Body() body: CreateVisitorDTO): Promise<any> {
    return await this.visitorService.register(body,VisitorRole.GUEST);
  }

  @Post('admin/register')
  @UseInterceptors(ApiTransformInterceptor)
  @ApiOperation({ summary: '管理员注册' })
  @ApiOkResponse({ description: '注册成功' })
  async adminRegister(@Body() body: CreateVisitorDTO): Promise<any> {
    return await this.visitorService.register(body,VisitorRole.ADMIN);
  }

  @Post('login')
  @UseInterceptors(ApiTransformInterceptor)
  @ApiOperation({ summary: '登录' })
  @ApiOkResponse({ description: '游客登录成功' })
  async login(@Body() body: LoginDTO): Promise<any> {
    return await this.visitorService.login(body, VisitorRole.GUEST);
  }

  @Post('admin/login')
  @UseInterceptors(ApiTransformInterceptor)
  @ApiOperation({ summary: '登录' })
  @ApiOkResponse({ description: '管理员登录成功' })
  async adminLogin(@Body() body: LoginDTO): Promise<any> {
    return await this.visitorService.login(body, VisitorRole.ADMIN);
  }
}
