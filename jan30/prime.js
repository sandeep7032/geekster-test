var n = prompt("enter range");
n=parseInt(n);
var condition;

for(i=2;i<=n;i++)
{
    condition = true;
    for(j=2;j<=parseInt(i/2);j++)
    {
        if(i%j==0)
        {
            condition=false;
            break;
        }
    }
    if(condition)
    document.write(i+" ");
}
