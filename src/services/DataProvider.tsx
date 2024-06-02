import { Image } from "../models/Image";
import imageData from '../data/images.json';

export const getImages = (): Image[] => {
    return imageData.map(item => new Image(item.location, item.alt, item.color, item.title, item.description));
};