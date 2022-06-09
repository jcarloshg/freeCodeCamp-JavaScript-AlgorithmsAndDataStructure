import java.util.*;
import java.io.*;

class Solution {
    public static void main(String[] argh) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        int int_low = (int) -Math.pow(2, 31);
        System.out.println(int_low);
        int int_up = (int) Math.pow(2, 31) - 1;

        long long_low = (long) -Math.pow(2, 63);
        long long_up = (long) Math.pow(2, 63) - 1;

        for (int i = 0; i < t; i++) {

            try {
                long x = sc.nextLong();
                System.out.println(x + " can be fitted in:");
                if (x >= -128 && x <= 127)
                    System.out.println("* byte");
                if (x >= -32768 && x <= 32767)
                    System.out.println("* short");
                if (x >= int_low && x <= int_up)
                    System.out.println("* int");
                if (x >= long_low && x <= long_up)
                    System.out.println("* long");
                // Complete the code
            } catch (Exception e) {
                System.out.println(sc.next() + " can't be fitted anywhere.");
            }
        }
    }
}