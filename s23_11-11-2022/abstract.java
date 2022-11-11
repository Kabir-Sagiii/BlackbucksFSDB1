abstract class AbstractDemo {

    public abstract void display();

    public void sum() {
        int x = 10;
        int y = 20;
        System.out.println(x + y);
    }
}

class B extends AbstractDemo {
    public void display() {
        System.out.println("Abstract method is implemented");
    }

    public static void main(String[] args) {
        B b1 = new B();
        b1.display();
        b1.sum();
    }
}