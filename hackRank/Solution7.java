
import java.util.*;
import java.io.*;

public class Solution7 {

    public static void secuencia(int a, int b, int n) {
        for (int i = 0; i < n; i++) {
            int result = a;
            // operation intern
            for (int j = 0; j <= i; j++) { // ... ((2^1) * b) ... ((2^n-1) * b)
                int operation = ((int) Math.pow(2, n)) * b; // (2^n) * b
                result += operation;
            }
            System.out.format("%d ", result);
        }

        System.out.println();
    }

    public static void main(String[] argh) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int i = 0; i < t; i++) {
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();

            secuencia(a, b, n);
        }
        in.close();
    }
}
