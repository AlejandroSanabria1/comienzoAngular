import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {

  transform(value: string, args?: any): string{
        
      if(!value){
        return '';
      }  
      if(value.length <= args.maxlength){
        return value;
      }
        
      value=value.substring(0,args['maxlength']); 
      if(args['ellipsis'])
        value=value+"...";
      return value;
  }

}
