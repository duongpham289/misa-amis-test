export class HeaderLink {
  Type: number;
  Name: string;

  constructor(Type: number, Name: string) {
    this.Type = Type;
    this.Name = Name;
  }
}

export const HeaderLinks: HeaderLink[] = [
  {
    Type: 1,
    Name: 'Danh sách'
  },
  {
    Type: 2,
    Name: 'Báo cáo'
  }
]
