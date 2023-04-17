export class ListModel {
  public cards: string[] = [];
  public location: { x: number; y: number } = { x: 0, y: 0 };

  constructor(public name: string) {}
}
