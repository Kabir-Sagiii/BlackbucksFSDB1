public class Constructor {

    int num1;
    int num2;

    public Constructor() {
        num1 = 100;
        num2 = 200;
    }

    public Constructor(int x, int y) {
        num1 = x;
        num2 = y;
    }

    public void display() {
        System.out.println(num1);
        System.out.println(num2);
    }

    public void print() {
        display();
    }

    public static void main(String Args[]) {
        Constructor c1 = new Constructor(30, 40);
        Constructor c2 = new Constructor();

        // c1.display();
        c1.print();
        c2.print();
    }
}
