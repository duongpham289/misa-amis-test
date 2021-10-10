export class ReportTask {
  AssigneeId: string;
  AssigneeName: string;
  Finished: number;
  TotalTask: number;
  UnFinished: number

  constructor(Finished: number = 0, TotalTask: number = 0, UnFinished: number = 0, AssigneeId: string = '', AssigneeName: string = '') {
    this.AssigneeId = AssigneeId;
    this.AssigneeName = AssigneeName;
    this.Finished = Finished;
    this.TotalTask = TotalTask;
    this.UnFinished = UnFinished;
  }
}