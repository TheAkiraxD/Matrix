//Matrix Library - 1
//Starting 20/05/2018
//Last update 20/05/2018
//Creator: https://github.com/TheAkiraxD

class Matrix {
	constructor(x,y){
		this.Rows = x;
		this.Cols = y;
		this.Data = [];

		for(var i = 0; i < this.Rows; i++){
			this.Data[i] = [];
			for(var j = 0; j < this.Cols; j++){
				this.Data[i][j] = 0;
			}
		}
	}																			
	
	// • Basic mathematic operations

	add(b){
		if(typeof b == 'number'){
			Matrix.mapUnique(this, b, function(a,b){return a + b;});
		}else if(this.isEquivalent(b)){
			Matrix.mapArgumented(this, b, function(a,b){return a + b;});
		}
	}
	static add(a, b){
		if(a instanceof Matrix && typeof b == 'number'){
			Matrix.mapUnique(a, b, function(a,b){return a + b;});
		}else if(a.isEquivalent(b)){
			Matrix.mapArgumented(a, b, function(a,b){return a + b;});
		}
	}
	sub(b){
		if(typeof b == 'number'){
			Matrix.mapUnique(this, b, function(a,b){return a - b;});
		}else if(this.isEquivalent(b)){
			Matrix.mapArgumented(this, b, function(a,b){return a - b;});
		}
	}
	static sub(a, b){
		if(a instanceof Matrix && typeof b == 'number'){
			Matrix.mapUnique(a, b, function(a,b){return a - b;});
		}else if(a.isEquivalent(b)){
			Matrix.mapArgumented(a, b, function(a,b){return a - b;});
		}
	}
	mult(b){
		if(typeof b == 'number'){
			Matrix.mapUnique(this, b, function(a,b){return a * b;});
		}else if(this.isEquivalent(b)){
			Matrix.mapArgumented(this, b, function(a,b){return a * b;});
		}
	}
	static mult(a, b){
		if(a instanceof Matrix && typeof b == 'number'){
			Matrix.mapUnique(a, b, function(a,b){return a * b;});
		}else if(a.isEquivalent(b)){
			Matrix.mapArgumented(a, b, function(a,b){return a * b;});
		}
	}
	div(b){
		if(typeof b == 'number'){
			Matrix.mapUnique(this, b, function(a,b){return a != 0 ? a / b : 0;});
		}else if(this.isEquivalent(b)){
			Matrix.mapArgumented(this, b, function(a,b){return a != 0 ? a / b : 0;});
		}
	}
	static div(a, b){
		if(a instanceof Matrix && typeof b == 'number'){
			Matrix.mapUnique(a, b, function(a,b){return a != 0 ? a / b : 0;});
		}else if(a.isEquivalent(b)){
			Matrix.mapArgumented(a, b, function(a,b){return a != 0 ? a / b : 0;});
		}
	}

	// • Geometric operations
	static scalar(a,b){
		if(a instanceof Matrix && b instanceof Matrix && a.isGeoEquivalent(b)){
			var result = new Matrix(a.Rows, b.Cols);
			for(var i = 0; i < result.Rows; i++){
				for(var j = 0; j < result.Cols; j++){
					var sum = 0;
					for(var k = 0; k < a.Cols; k++){
						sum += a.Data[i][k] * b.Data[k][j];
					}
					result.Data[i][j] = sum;
				}
			}
			return result;
		}
	}

	// • Other	
	transpose(){
		var values = this.Data;
		var rows = this.Cols;
		var cols = this.Rows;

		this.Rows = rows;
		this.Cols = cols;
		this.Data = [];

		for(var i = 0; i < this.Rows; i++){
			this.Data[i] = [];
			for(var j = 0; j < this.Cols; j++){
				this.Data[i][j] = values[j][i];
			}
		}
	}
	static transpose(b){
		if(b instanceof Matrix){
			var values = b.Data;
			var rows = b.Cols;
			var cols = b.Rows;

			b.Rows = rows;
			b.Cols = cols;
			b.Data = [];

			for(var i = 0; i < b.Rows; i++){
				b.Data[i] = [];
				for(var j = 0; j < b.Cols; j++){
					b.Data[i][j] = values[j][i];
				}
			}
		}
	};
	static fromArray(arr){
		var m = new Matrix(arr.length, 1);
		for(var i = 0; i < arr.length; i++){
			m.Data[i][0] = arr[i];
		}
		return m;
	}
	toArray(){
		var arr = [];
		for(var i = 0; i < this.Rows; i++){
			for(var j = 0; j < this.Cols; j++){
				arr.push(this.Data[i][j]);
			}
		}
		return arr;
	}
	isEquivalent(b){

		return (this.Cols == b.Cols && this.Rows == b.Rows) ? true:false;
	}
	static isEquivalent(a,b){ // The equivalent term is probably not the best

		return (a.Cols == b.Cols && a.Rows == b.Rows) ? true:false;
	};
	isGeoEquivalent(b){ // About this term... may god bless us all

		return (this.Cols == b.Rows) ? true:false;
	}
	static isGeoEquivalent(a,b){

		return (a.Cols == b.Rows) ? true:false;
	}
	randomize(){

		Matrix.mapSimple(this, function(){return Math.floor(Math.random() * 10)});
	}
	static randomize(a){

		Matrix.mapSimple(a, function(){return Math.floor(Math.random() * 10)});
	}
	static mapSimple(a, func){
		for(var i=0; i<a.Rows; i++){
			for(var j=0; j<a.Cols; j++){
				a.Data[i][j] = func();
			}
		}
	}
	static mapUnique(a,b, func){
		for(var i=0; i<a.Rows; i++){
			for(var j=0; j<a.Cols; j++){
				a.Data[i][j] = func(a.Data[i][j],b);
			}
		}
	}
	static mapArgumented(a,b, func){
		for(var i=0; i<a.Rows; i++){
			for(var j=0; j<a.Cols; j++){
				a.Data[i][j] = func(a.Data[i][j],b.Data[i][j]);
			}
		}
	}
	print(){

		console.table(this.Data);
	}
}