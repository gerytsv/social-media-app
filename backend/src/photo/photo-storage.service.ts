import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { extname } from 'path';
import { SystemError } from '../common/exceptions/system.error';
import { imgurConfig } from '../common/imgur.config';

@Injectable()
export class PhotoStorageService {
  constructor() {}

  public async uploadPhoto(
    photo: any,
  ): Promise<{ photoLink: string; photoDeleteHash: string }> {
    if (!/\.(gif|jpg|jpeg|png)$/i.test(extname(photo.originalname))) {
      throw new SystemError('Invalid img format', 400);
    }

    const image = photo.buffer;

    const { data } = await axios(`${imgurConfig.baseUrl}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Client-ID ${imgurConfig.clientId}`,
        'Content-Type': 'multipart/form-data',
      },
      data: image,
    });

    return { photoLink: data.data.link, photoDeleteHash: data.data.deletehash };
  }

  public async uploadPhotoForPost(
    photo: any,
  ): Promise<{ photoLink: string; photoDeleteHash: string }> {
    const { data } = await axios(`${imgurConfig.baseUrl}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Client-ID ${imgurConfig.clientId}`,
        'Content-Type': 'multipart/form-data',
      },
      data: photo.base64,
    });

    return { photoLink: data.data.link, photoDeleteHash: data.data.deletehash };
  }

  public async getPhoto(photoId: string) {
    const { data } = await axios(`${imgurConfig.baseUrl}/image/${photoId}`, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${imgurConfig.clientId}`,
      },
    });
    return data.data;
  }

  public async deletePhoto(photoDeleteHash: string): Promise<void> {
    await axios(`${imgurConfig.baseUrl}/image/${photoDeleteHash}`, {
      method: 'DELETE',
      headers: {
        Authorization: imgurConfig.clientId,
      },
    });
  }
}
