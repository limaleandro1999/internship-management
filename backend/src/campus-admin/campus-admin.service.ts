import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseFilter } from 'src/common/interfaces/base-filter-interface';
import { Raw, Repository } from 'typeorm';
import { CampusAdmin } from './campus-admin.entity';
import { CreateCampusAdminDTO } from './dto/create-campus-admin.dto';

@Injectable()
export class CampusAdminService {
  constructor(
    @InjectRepository(CampusAdmin)
    private campusAdminRepository: Repository<CampusAdmin>
  ){}

  findAll(order?: object, skip?: number, take?: number, filter?: BaseFilter): Promise<[CampusAdmin[], number]> {
    const { q } = filter;
    const whereClause = q ? { name: Raw(alias => `${alias} ILIKE '%${q}%'`) } : null;
    return this.campusAdminRepository.findAndCount({ order, skip, take, where: whereClause });
  }

  create(campusAdmin: CreateCampusAdminDTO): Promise<CampusAdmin> {
    const campusAdminObj = this.campusAdminRepository.create(campusAdmin);
    return this.campusAdminRepository.save(campusAdminObj);
  }
}