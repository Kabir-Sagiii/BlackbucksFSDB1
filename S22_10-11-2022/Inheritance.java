class A {
    int x = 10;
    int y = 20;

    public int sum() {
        return x + y;
    }

    public static void main(String[] args) {
        A a1 = new A();
        System.out.println(a1.sum());
    }

}

class B extends A {
    String name = "Darsh";
    String city = "Delhi";

    public void displayData() {
        System.out.println(name);
        System.out.println(city);
    }

    public static void main(String[] args) {
        B b1 = new B();
        System.out.println(b1.sum());
        b1.displayData();
    }

}
