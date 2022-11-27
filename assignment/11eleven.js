function main()
{

let tc,d,ap;
// document.write("enter the total cost of the ietems");
tc=prompt("Enter Cost");


if(tc<=2000)
d=5/100*tc;
else if (tc>=2001 && tc<=5000)
d=25/100*tc;
else if (tc>=5001 && tc<=10000)
d=35/100*tc;
else
d=50/100*tc;
ap=tc-d;
document.write("Amount Payable:" +ap);

}
main()



