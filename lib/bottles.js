import { downTo } from './helpers';
export class Bottles {
  song() {
    return this.verses(99, 0);
  }
  verses(startN, endN) {
    return downTo(startN, endN)
      .map(n => this.verse(n))
      .join("\n");
  }

  verse(n) {
    return this.firstVerse(n) +
        this.secondVerse(n) +
        this.thirdVerse(n) +
        this.fourthVerse(n);
  }

  firstVerse(n) {
    if(n==0) {
      return 'No more bottles of beer on the wall, ';
    }
    return n + ' bottle' + (n==1 ? '' : 's') + ' of beer on the wall, ';
  }

  secondVerse(n) {
    if(n==0) {
      return 'no more bottles of beer.\n';
    }
    return n + ' bottle' + (n==1 ? '' : 's') + ' of beer.\n';
  }

  thirdVerse(n) {
    if(n==0) {
      return 'Go to the store and buy some more, ';
    }
    if(n==1) {
      return 'Take it down and pass it around, ';
    }
    return 'Take one down and pass it around, ';
  }

  fourthVerse(n) {
    if(n==0) {
      return '99 bottles of beer on the wall.\n';
    }
    if(n==1) {
      return 'no more bottles of beer on the wall.\n';
    }
    if(n==2) {
      return '1 bottle of beer on the wall.\n';
    }
    return (n-1) + ' bottles of beer on the wall.\n';
  }
}
