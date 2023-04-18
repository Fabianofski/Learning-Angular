import { PositionModel } from '../../position.model';

export class Card {
  public location: PositionModel = new PositionModel(0, 0);
  public text: string = '';
}
