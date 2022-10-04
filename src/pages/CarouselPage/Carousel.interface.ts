import {Animated} from 'react-native';

export interface ICarouselItem {
  title: string;
  description: string;
}

export interface ISlides {
  id: string;
  title: string;
  description: string;
}

export interface IPaginator {
  data: ISlides[];
  scrollX: Animated.Value;
}
