function find_Pell_Series(){
	let a = 1;
	let b = 2;
	let c;
	let n = prompt( "Enter the length of Pell series:" );

	for(let i=1;i<=n;i++){
	    c = a + ( 2 * b) ;
		document.write( `output of Pell series is : `  + c, "<br>"    );
		a = b;
		b = c;
	}
}
find_Pell_Series();

