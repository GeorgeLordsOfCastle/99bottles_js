import { downTo } from './helpers';
export class Bottles {
  verse(n) {
    return this.firstVerse(n) +
        this.secondVerse(n) +
        this.thirdVerse(n) +
        this.fourthVerse(n);
  }

  firstVerse(n) {
    return n + ' bottle' + (n==1 ? '' : 's') + ' of beer on the wall, ';
  }

  secondVerse(n) {
    return n + ' bottle' + (n==1 ? '' : 's') + ' of beer.\n';
  }

  thirdVerse(n) {
    if(n==1) {
      return 'Take it down and pass it around, ';
    } else {
      return 'Take one down and pass it around, ';
    }
  }

  fourthVerse(n) {
    if(n==1) {
      return 'no more bottles of beer on the wall.\n';
    }
    if(n==2) {
      return '1 bottle of beer on the wall.\n';
    }
    return (n-1) + ' bottles of beer on the wall.\n';
  }
}
