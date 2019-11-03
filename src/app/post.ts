export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title: string, content: string) {
    this.createdAt = new Date();
    this.loveIts = 0;
    this.title = title;
    this.content = content;
  }
}
