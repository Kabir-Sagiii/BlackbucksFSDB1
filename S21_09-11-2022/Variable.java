
public class Variable {

    int num = 20;
    int num2 = 50;
    String city = "Hyderabad";

    public void sum() {
        System.out.println(num + num2);
    }

    public static void main(String Args[]) {
        System.out.println("Java Programming");

        Variable v1 = new Variable(); // special operator //constructor

        System.out.println(v1.city); // hyderabad
        v1.city = "Delhi";
        System.out.println(v1.num);
        System.out.println(v1.city); // delhi
        v1.sum();
    }
}
