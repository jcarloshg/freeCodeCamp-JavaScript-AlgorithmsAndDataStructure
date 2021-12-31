
import java.util.Scanner;

public class solution5 {

    private static final int CHARACTERS = 15;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("================================");
        for (int i = 0; i < 3; i++) {
            String s1 = scanner.next();
            int x = scanner.nextInt();

            // int spaceWithe = CHARACTERS - s1.length();

            // String formaString = "";
            // formaString += "%s "; // add word
            // formaString += "%" + Integer.toString(spaceWithe) + "s "; // add spaces white
            // formaString += "%03d \n"; // add number

            // String result = String.format(formaString, s1, " ", x);
            // System.out.println(result);

            System.out.format("%-15s%03d%n", s1, x);
        }
        System.out.println("================================");
    }
}
