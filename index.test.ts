import { test } from "vitest";
import { mergeTrains, Train, TrainCar, TrainCarType } from "./index";

test("merges trains", () => {
  const train1 = new Train();
  train1.head = new TrainCar(TrainCarType.Engine);
  train1.head.next = new TrainCar(TrainCarType.Passenger);
  train1.head.next.next = new TrainCar(TrainCarType.Passenger);
  train1.head.next.next.next = new TrainCar(TrainCarType.Passenger);
  train1.head.next.next.next.next = new TrainCar(TrainCarType.Caboose);
  train1.head.next.next.next.next.next = new TrainCar(TrainCarType.Caboose);

  const train2 = new Train();
  train2.head = new TrainCar(TrainCarType.Engine);
  train2.head.next = new TrainCar(TrainCarType.Passenger);
  train2.head.next.next = new TrainCar(TrainCarType.Caboose);

  const actual = mergeTrains(train1, train2);

  actual.logTrainCars();
});
