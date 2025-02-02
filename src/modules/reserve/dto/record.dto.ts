import { ApiProperty } from '@nestjs/swagger';
// 增加预约记录
export class CreateRecordDTO {
  @ApiProperty({
    type: String,
    description: '预约状态',
    enum: ['ACTIVE', 'CANCEL', 'COMPLETE'],
  })
  readonly status: string;
  @ApiProperty({
    description: '预约人数',
    type: Number,
    minimum: 1,
    default: 1,
  })
  readonly tableSize: number;
  @ApiProperty({
    description: '预约人手机号码',
    type: String,
  })
  mobile:String;
  @ApiProperty({
    description: '预约日期',
    type: Date,
  })
  reserveAt: Date;
  userId:String;
}

// 修改记录
export class EditRecordDTO {
  @ApiProperty({
    type: String,
    description: '主键id',
  })
  readonly _id: string;
  @ApiProperty({
    type: String,
    description: '预约状态',
    enum: ['ACTIVE', 'CANCEL', 'COMPLETE'],
  })
  readonly status: string;
  @ApiProperty({
    description: '预约人数',
    type: Number,
    minimum: 1,
    default: 1,
  })
  readonly tableSize: number;
  @ApiProperty({
    description: '记录状态',
    type: Number,
    default: 0,
  })
  readonly isDel: number;

  @ApiProperty({
    description: '预约人手机号码',
    type: String,
  })
  mobile:String;
  @ApiProperty({
    description: '预约日期',
    type: Date,
  })
  reserveAt: Date;
}

export class AdminModifyRecordStatusDTO {
  @ApiProperty({
    type: String,
    description: '主键id',
  })
  readonly _id: string;
  @ApiProperty({
    type: String,
    description: '预约状态',
    enum: ['CANCEL', 'COMPLETE'],
  })
  readonly status: string;
}

// 搜索记录
export class SearchRecordDTO {
  @ApiProperty({
    type: String,
    description: '预约状态',
    enum: ['ACTIVE', 'CANCEL', 'COMPLETE'],
  })
  readonly status: string;
  @ApiProperty({
    description: '开始时间',
    type: Date,
  })
  readonly beginDate: Date;
  @ApiProperty({
    description: '结束时间',
    type: Date,
  })
  readonly endDate: Date;
}

