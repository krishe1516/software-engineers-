function main(){
    let tc,d,ap;
    document.write("enter the total cost of items:");
    tc=prompt('enter cost');
    if(tc<=2000)
    d=5/100*tc;
    else if(tc>=2001&& tc<=5000)
    d=25/100*tc;
    else if(tc>=5001 && tc<=10000)
    d=50/100*tc;
    ap=tc-d;
document.write('amount payble:'+ap)
}
main()