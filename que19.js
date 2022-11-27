function find_Lucas_Series(){

	let a = 3;

	let b = -1;

	let c;

	let n = prompt( "Enter the length of lucas series:" );




	for(let i=1;i<=n;i++){

	    c=a+b;

		document.write( `output of lucas series is : `  + c, "<br>"    );

		a = b;

		b = c;

	}

}

find_Lucas_Series();