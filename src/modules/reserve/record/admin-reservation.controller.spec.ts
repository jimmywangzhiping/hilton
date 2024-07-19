import { Test, TestingModule } from '@nestjs/testing';
import { AdminReservationController } from './admin-reservation.controller';

describe('AdminReservationController', () => {
  let controller: AdminReservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminReservationController],
    }).compile();

    controller = module.get<AdminReservationController>(AdminReservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
