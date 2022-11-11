public class Poly {

    public void display() {
        System.out.println("No Parameter");
    }

    public void display(int x) {
        System.out.println("Method with one Integer Parameter");
    }

    public void display(String s) {
        System.out.println("Method with one Sting Parameter");
    }

    public void display(int x, String name) {
        System.out.println("Method with two Parameter, where first in int and second in string");
    }

    public void display(String x, int name) {
        System.out.println("Method with two Parameter, where first is String and second is int");
    }

    public static void main(String[] args) {
        Poly p1 = new Poly();
        p1.display();
        p1.display("cdc", 10);
    }
}
