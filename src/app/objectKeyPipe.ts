import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'keyPipe',
  pure: false
})
export class KeyPipe implements PipeTransform {
      private _dataArray: any = [];
      private keyArr: any = [];

      transform(value: any, args?: any[]): any[] {
        this.keyArr = Object.keys(value);
        for (let i=0 ; i< this.keyArr.length ; i++){
         	if(value[this.keyArr[i]].length >1){
         		for( let j=0 ; j<value[this.keyArr[i]].length ; j++ )
         			this._dataArray.push(value[this.keyArr[i]][j]);
         	}else{
         	this._dataArray.push(value[this.keyArr[i]][0]);
         	}
        }
        return this._dataArray;
    }
}
