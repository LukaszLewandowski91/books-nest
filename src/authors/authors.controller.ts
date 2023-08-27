import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDTO } from './dtos/create-author.dto';
import { UpdateAuthorDTO } from './dtos/update-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private authorService: AuthorsService) {}

  @Get('/')
  getAll(): any {
    return this.authorService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.authorService.getById(id))) {
      throw new NotFoundException('Author not found');
    }
    return this.authorService.getById(id);
  }

  @Post('/')
  create(@Body() authorData: CreateAuthorDTO) {
    return this.authorService.create(authorData);
  }

  @Put('/:id')
  async edit(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() authorData: UpdateAuthorDTO,
  ) {
    if (!(await this.authorService.getById(id))) {
      throw new NotFoundException('Author not found');
    }
    await this.authorService.updateById(id, authorData);
    return { success: true };
  }

  @Delete('/:id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.authorService.getById(id))) {
      throw new NotFoundException('Author not found');
    }
    await this.authorService.deleteById(id);
    return { success: true };
  }
}
