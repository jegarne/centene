// assign the enum an integer value
// so we can compare them
export enum TrainCarType {
  Engine = 1,
  Passenger = 2,
  Caboose = 3,
}

//The follow interfaces are provided
interface ITrainCar {
  next?: ITrainCar;
  type: TrainCarType;
}

export class TrainCar implements ITrainCar {
  constructor(type: TrainCarType, nextTrain?: ITrainCar) {
    this.next = nextTrain;
    this.type = type;
  }
  type: TrainCarType;
  next?: ITrainCar;
}

interface ITrain {
  // the first car in the train
  head?: ITrainCar;
  logTrainCars(): void;
}

export class Train implements ITrain {
  constructor(head?: ITrainCar) {
    this.head = head;
  }
  head?: ITrainCar;

  // Recursive function to print the linked list
  logTrainCars(node = this.head) {
    // log before returning so you don't miss the last node
    console.log(node?.type ? TrainCarType[node.type] : node?.type);
    if (!node?.next) {
      return;
    }
    this.logTrainCars(node?.next);
  }
}

export function mergeTrainCars(
  a: ITrainCar | undefined,
  b: ITrainCar | undefined
) {
  let result = null;

  if (!a) {
    return b;
  } else if (!b) {
    return a;
  }

  if (a.type <= b.type) {
    result = a;
    result.next = mergeTrainCars(a.next, b);
  } else {
    result = b;
    result.next = mergeTrainCars(a, b.next);
  }

  return result;
}

export const mergeTrains = (a: ITrain, b: ITrain): Train =>
  new Train(mergeTrainCars(a.head, b.head));
