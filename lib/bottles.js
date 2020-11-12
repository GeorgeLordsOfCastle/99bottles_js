import { downTo } from './helpers';
export class Bottles {
  verse(n) {
    return n + ' bottles of beer on the wall, ' +
        n + ' bottles of beer.\n' +
        'Take one down and pass it around, ' +
        (n-1) + ' bottle' + (n==2 ? '' : 's') + ' of beer on the wall.\n';
  }  
}
