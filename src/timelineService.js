import parser from 'papaparse';
import content from './content.js';

export class FileBasedTimelineService {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async provideTimelineEvents() {
    var result = parser.parse(
      content,
      {
      header: true,
      delimiter: '\t',
      skipEmptyLines: true
      });
    return result.data;
  }
}