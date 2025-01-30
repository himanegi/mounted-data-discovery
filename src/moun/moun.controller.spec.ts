import { Test, TestingModule } from '@nestjs/testing';
import { MounController } from './moun.controller';

describe('MounController', () => {
  let controller: MounController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MounController],
    }).compile();

    controller = module.get<MounController>(MounController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
