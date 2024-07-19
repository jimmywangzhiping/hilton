import { Query, Resolver } from '@nestjs/graphql';
import { Record } from '../model/record';
import { RecordService } from '../record/record.service';
import { HttpException } from '@nestjs/common';
@Resolver((of) => Record)
export class RecordResolver {
  constructor(private readonly recordService: RecordService) {}
  @Query('getReserveRecordAll')
  async getReserveRecordAll(): Promise<Record[]> {
    try {
      return await this.recordService.getReserveRecordAll();
    } catch (error) {

      throw new HttpException({
        status: 500,
        error: 'SYSTERM ERROR',
      },500)
    }
  }
}

