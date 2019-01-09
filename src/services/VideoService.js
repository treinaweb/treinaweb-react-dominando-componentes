import { ApiService } from './ApiService';

const endpoint = 'videos';

export const VideoService = {
    list(){
        return ApiService.get(endpoint);
    }
}