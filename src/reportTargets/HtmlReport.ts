import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget{
    print(report:string):void{
        const html = `
        <div>
            <H1>Analysis Report</H1>
            <div>${report}</div>
        </div>
        `;
    fs.writeFileSync('report.html', html);
    }
    
}