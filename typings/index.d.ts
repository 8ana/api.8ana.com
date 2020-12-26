declare module 'egg' {
  interface CustomController {
    chat: any;
  }

  interface EggSocketNameSpace {
    emit: any
  }
}