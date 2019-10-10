export class Utils {
  public static format(source: string, ...replacements: any[]) {
    return source.replace(/{(\d+)}/g, (match, num) => {
      return typeof replacements[num] !== 'undefined' ? replacements[num] : match;
    });
  }
}

