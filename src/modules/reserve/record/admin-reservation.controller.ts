import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { Authorize } from 'src/common/decorators/authorize.decorator';
import { Visitor } from 'src/common/decorators/visitor.decorator';
import { ApiTransformInterceptor } from 'src/common/interceptors/api-transform.interceptor';
import { AdminModifyRecordStatusDTO, CreateRecordDTO, EditRecordDTO, SearchRecordDTO } from '../dto/record.dto';
import { IVisitor } from '../interface/visitor.interface';
import { RecordService } from './record.service';

@Controller('admin/reservation')
export class AdminReservationController {
    constructor(private readonly recordService: RecordService) {}
  
  /**
   * 变更预约信息
   * @param body
   * @returns
   */
  @ApiHeader({
    name: 'Authorization',
    description: 'Auth token',
  })
  @ApiOperation({ summary: '管理员变更预约信息' })
  @ApiOkResponse({ description: '变更预约信息成功' })
  @Post('update')
  @Authorize()
  @UseInterceptors(ApiTransformInterceptor)
  async update(
    @Body() body: EditRecordDTO,
    @Visitor() visitor: IVisitor,
  ): Promise<any> {
    const userId = visitor.uid;
    return await this.recordService.update(body, userId);
  }

  /**
   * 管理员变更预约状态
   * @param body
   * @returns
   */
  @ApiHeader({
    name: 'Authorization',
    description: 'Auth token',
  })
  @ApiOperation({ summary: '管理员变更预约状态' })
  @ApiOkResponse({ description: '变更预约信息成功' })
  @Post('modify/status')
  @Authorize()
  @UseInterceptors(ApiTransformInterceptor)
  async modifyStatus(
    @Body() body: AdminModifyRecordStatusDTO,
    @Visitor() visitor: IVisitor,
  ): Promise<any> {
    const userId = visitor.uid;
    return await this.recordService.modifyStatus(body, userId);
  }
  /**
   * 获取预约信息详情
   * @param params
   * @returns
   */
  @ApiHeader({
    name: 'Authorization',
    description: 'Auth token',
  })
  @ApiOperation({ summary: '获取预约信息详情' })
  @ApiOkResponse({ description: '获取预约信息详情成功' })
  @Get('info/:id')
  @Authorize()
  @UseInterceptors(ApiTransformInterceptor)
  async getReserveRecordById(@Param() params) {
    return await this.recordService.findOneById(params.id);
  }

  /**
   * 获取预约信息
   * @param params
   * @returns
   */
  @ApiHeader({
    name: 'Authorization',
    description: 'Auth token',
  })
  @ApiOperation({ summary: '获取预约信息' })
  @ApiOkResponse({ description: '获取预约信息成功' })
  @Get('getReserveRecords')
  @Authorize()
  @UseInterceptors(ApiTransformInterceptor)
  async getReserveRecords(
    @Body() body: SearchRecordDTO,
  ) {
    return await this.recordService.getReserveRecords(
      body.status,
      body.beginDate,
      body.endDate,
    );
  }
}
