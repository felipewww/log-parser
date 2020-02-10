import * as fs from "fs";
import * as es from "event-stream";

export class LogFileSource {
    private root: string = __dirname + '/../../../../Logs/';

    get(filename: string) {
        let lines: Array<string> = [];

        return new Promise((resolve, reject) => {
            let stream: any;

            stream = fs.createReadStream(this.root + filename)
                .on('error', function(err) {
                    reject(err);
                })
                .pipe(es.split())
                .pipe(
                    es.mapSync(function(line: any) {
                        stream.pause();
                        lines.push(line);
                        stream.resume();
                    })
                    .on('end', function() {
                        resolve(lines);
                    })
                );
        })
    }
}