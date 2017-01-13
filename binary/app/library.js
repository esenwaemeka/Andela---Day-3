'use strict'
//Array = {};

Array.prototype.oneToTwenty = function(){

    var arr=[], n=20, i;

	    for (var i = 1; i<(n+1); i++){
	 
			arr.push(i);
	    }
	        return arr;
	    };

Array.prototype.twoToForty = function(){

    var arr=[], n=40, i;

		for (var i = 2; i< (n+2); i+=2){
		 
			arr.push(i)
		}
		    return arr;
		};

Array.prototype.tenToOneThousand = function(){

	var arr=[], n=1000, i;

		for (var i = 10; i< (n+10); i+=10){
 
		    arr.push(i)
		}
		    return arr;
    };

Array.prototype.search = function(num){
	var arg, mid, count=0, index, found = false,len =this.length;
	mid = (this.lenght/2)


		while (this.lenght >0){
			if (num == mid){
                found = true;
                break;
	        }
	       

			if (num < mid){
				arg = this.slice(0, mid);
				count++
			}
			else if (num > mid){
				arg = this.slice(mid +1)
				count++
			}
			else{
			 return { count: count, length: len, index: mid}
			}
        }



				return -1
	};
       
        this.index = function(){
      	    for (i=0; i<this.length; i++){
      		    if (num==this[i]);{
      		    return {index:i};
      	    }
      	}
      }

		
var data={};
data.oneToTwenty= [].oneToTwenty();
data.twoToForty = [].twoToForty();
data.tenToOneThousand = [].tenToOneThousand();
data.search = function(num){
  return [].search(num);
}
module.exports=data