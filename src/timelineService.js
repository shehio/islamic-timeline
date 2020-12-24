import parser from 'papaparse';

export class FileBasedTimelineService {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async provideTimelineEvents() {
    var data = await fetch(
      this.filePath,
      {
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      });
    data = await data.text();
    var result = parser.parse(data, {
      header: true,
      delimiter: '\t',
      skipEmptyLines: true
    });
    return result.data;
  }
}