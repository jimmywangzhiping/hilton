import { ApiProperty } from '@nestjs/swagger';
// import { VisitorRole } from '../schemas/types';

// 增加访客记录
export class CreateVisitorDTO {
  @ApiProperty({
    type: String,
    description: '主键id',
  })
  readonly _id: string;
  @ApiProperty({
    type: String,
    description: '账号',
  })
  readonly userName: string;
  @ApiProperty({
    type: String,
    description: '密码',
  })
  public password: string;
  @ApiProperty({
    type: String,
    description: '手机号码',
  })
  readonly mobile: string;
  @ApiProperty({
    type: String,
    description: '来源',
  })
  readonly utmSource: string;
  role:string;
}

export class LoginDTO {
  @ApiProperty({
    type: String,
    description: '账号',
  })
  readonly userName: string;
  @ApiProperty({
    type: String,
    description: '密码',
  })
  readonly password: string;

  // @ApiProperty({
  //   type: String,
  //   description: '角色',
  //   enum: VisitorRole
  // })
  // readonly role: string;
}

