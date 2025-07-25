
class Pattern1{
    // public static void main(String[] args) {
    //     for(int i=1;i<=5;i++){
    //         for(int j=1;j<=i;j++){
    //             System.out.print(j);
    //         }
    //         System.out.println("");
    //     }
    //     // System.out.println("");
    // }


    public static void main(String[] args) {
    //     for(int i=1;i<=5;i++){
    //         for(int j=1;j<=i;j++){
    //             System.out.print("*");
    //         }
    //         System.out.println("");
    //     }
        
        //  int n = 4;
        //  for(int i=1;i<=n;i++){
        //     for(int j=1;j<=n;j++){
        //         if(i==1 || j==1 || i == n || j == n ){
        //             System.out.print("*");
        //         }
        //         else{
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println();
        //  }

        String str = "I am from Vemsoor";
        // System.out.println(word.length());
        int count = 0;
        for(int i=0;i<str.length();i++){
            // char c = str.charAt(i);
            if(str.charAt(i) != ' '){
                if(i==0 || str.charAt(i-1)==' '){
                    count++;
                }
            }
        }
        System.out.println(count);
    }}