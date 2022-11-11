class A {
    int x = 10;
    String name = "Darsh";
    boolean isPlaced = true;

    public void display() {
        System.out.println(x);
        System.out.println(name);
        System.out.println(isPlaced);
    }

    public static void main(String[] args) {
        A a1 = new A();
        a1.display();
    }
}
