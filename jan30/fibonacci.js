var n = prompt("enter fibonacci number");
arr = [];
    
   
    arr[1]=0;
    arr[2]=1;
    arr[3]=2;
    
    if (n>2)
    {
        for (i=3; i<=n;i++)
        {
            arr[i]=arr[i-1]+arr[i-2];
        }
    }
    
    document.write(arr[n]);
